---
title: "Script to check Prometheus and Grafana health"
date: "2024-06-22"
image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

In my journey to become a Site Reliability Engineer, this past week I have been working on a script to check the health of Prometheus and Grafana. I have been using Prometheus and Grafana for a while now and I wanted to make sure that they are up and running every time I start my server.

Monitoring is a critical aspect of managing any server infrastructure (in this case my old laptop running CentOs), a healthy monitoring system allows us to:

1. Keep track of the performance of our servers.

2. Identify and fix issues before it is too late.

3. Ensure **reliability** and **availability** of our services.

### Prometheus and Grafana ftw!

Prometheus is an open-source monitoring and alerting toolkit designed for reliability, scalability, and simplicity. It collects metrics from various sources and stores them in a time-series database, providing a powerful query language for data analysis.

Grafana complements Prometheus by offering an open-source analytics and monitoring platform. It allows you to query, visualize, and alert on your metrics, providing a flexible way to create dashboards and gain insights from your data.

### The Health Check Script

The first step is to locate the endpoints that we can use to check the health of Prometheus and Grafana. Prometheus exposes the endpoint /-/healthy, and for Grafana we can use /api/health.

```bash
# URL for health checks
GRAFANA_URL="http://localhost:3000/api/health"
PROMETHEUS_URL="http://localhost:9090/-/healthy"

# STATUS
GRAFANA_STATUS=1
PROMETHEUS_STATUS=1
```

Next, we can use curl to send a GET request to the endpoints and check the status code of the response. If the status code is 200, then the service is healthy, otherwise it is down.

```bash
# Check Grafana
if curl -s $GRAFANA_URL | grep -q "ok"; then
    echo "Grafana is healthy "
    GRAFANA_STATUS=0
else
    echo "Grafana is not healthy "
fi

# Check Prometheus
if curl -s $PROMETHEUS_URL | grep -q "Prometheus Server is Healthy."; then
    echo "Prometheus is healthy "
    PROMETHEUS_STATUS=0
else
    echo "Prometheus is not healthy "
fi
```

An crucial part of every monitoring system has to do with how we alert when something goes wrong. In this case, we can use the status variables to determine if any of the services are down and send an email notification, or in my case a Discord message.

```bash
# DISCORD WEBHOOK URL
WEBHOOK=<your_webhook_url>
```

To send a Discord message is straightforward, we can use curl to send a POST request to the Discord webhook URL with a JSON payload containing the message.

Here is a bash function to generate the JSON payload:

```bash
# Function to generate Discord webhook JSON payload
generate_post_data() {
    local grafana_status=$1
    local prometheus_status=$2
    local description=""

    if [ $grafana_status -ne 0 ]; then
        description+="Grafana is not healthy \n"
    else
        description+="Grafana is healthy \n"
    fi

    if [ $prometheus_status -ne 0 ]; then
        description+="Prometheus is not healthy "
    else
        description+="Prometheus is healthy "
    fi

cat <<EOF
{
  "content": "",
  "embeds": [{
    "title": "Service Health Status",
    "description": "$description",
    "color": $([ $grafana_status -eq 0 ] && [ $prometheus_status -eq 0 ] && echo "3066993" || echo "15158332")
  }]
}
EOF
}
```

Finally, we can call the function to generate the JSON payload and send the POST request to the Discord webhook URL.

```bash
# Alerting logic
if [ $GRAFANA_STATUS -ne 0 ] || [ $PROMETHEUS_STATUS -ne 0 ]; then
    # Send notification
    echo "One or more services are not healthy"
    curl -H "Content-Type: application/json" -X POST -d "$(generate_post_data $GRAFANA_STATUS $PROMETHEUS_STATUS)" $WEBHOOK
else
    echo "All services are healthy"
    curl -H "Content-Type: application/json" -X POST -d "$(generate_post_data $GRAFANA_STATUS $PROMETHEUS_STATUS)" $WEBHOOK
fi
```

Now that we have the script ready, we can schedule it to run periodically using cron. This way, we can ensure that Prometheus and Grafana are always up and running.

In my case I will also create a Systemd service to run the script when the server starts.

This service file should be saved in /etc/systemd/system/service-health-check.service

```bash
[Unit]
Description=Service Health Check
After=network.target grafana-server.service prometheus.service

[Service]
Type=oneshot
ExecStart=/usr/local/bin/service-health-check.sh

[Install]
WantedBy=multi-user.target
```

Now we can enable the service and start it:

```bash
sudo systemctl daemon-reload

sudo systemctl enable service-health-check
sudo systemctl start service-health-check
```

As with any monitoring system, it is important to continuously improve and adapt to the changing needs of your infrastructure. I will continue to refine this script and add more checks to ensure the reliability and availability of my services.
