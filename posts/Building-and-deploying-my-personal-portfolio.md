---
title: "Building and deploying my personal portfolio"
date: "2024-06-10"
image: "https://images.unsplash.com/photo-1613690399151-65ea69478674?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

In my opinion, one of the best ways to showcase your skills as a developer is by building a personal portfolio. It not only serves as a platform to showcase your projects and achievements but also demonstrates your technical abilities and creativity.

In this post, I want to share with whoever is reading this, the process of building, but most importantly, deploying my personal portfolio. I will cover the technologies I used, the challenges I faced, and the lessons I learned along the way, and how ultimately this left me with a broader understanding of some concepts of SRE and DevOps practices. You can check the final code repository https://github.com/YeyoM/portfolio.

### The Tech Stack

Since my last internship as a Site Reliability Engineer, I have been looking to apply some of the concepts I learned to something more personal. I decided to build my portfolio using the following technologies:

1. **Next.js**: A React framework that allows for server-side rendering and static site generation. This was a no-brainer for me as I wanted my portfolio to be fast and SEO-friendly.

2. **Docker**: I containerized my application to ensure consistency across different environments and to make it easier to deploy.

3. **Nginx**: I used Nginx as a reverse proxy server to serve my Next.js application and handle SSL termination.

4. **GitHub Actions**: I set up a CI/CD pipeline using GitHub Actions to automatically build and deploy my portfolio whenever I push changes to the `main` branch.

### The Design of the System

![Portfolio Architecture](https://github.com/YeyoM/portfolio/blob/main/public/system-design.png?raw=true)

The architecture of my portfolio is pretty straightforward:

1. **Frontend**: The Next.js application that serves the portfolio website.

2. **Docker**: The containerized application that runs the Next.js server.

3. **Nginx**: The reverse proxy server that routes incoming requests to the Next.js server and handles SSL termination.

4. **DuckDNS**: A free dynamic DNS service that I used to point my domain to my DigitalOcean droplet.

5. **DigitalOcean**: The cloud provider where I hosted my portfolio.

### Setting Up the Environment

Building my portfolio was a fun and challenging experience. I started by creating a simple design in Figma, to later on start coding the frontend using Next.js. I wanted to keep it simple and clean, focusing on the content and the user experience. Honeslty this part was pretty easy and I was able to finish it in a couple of days.

The part that I wanted to focus on this post is the deployment process. I wanted to make sure that my portfolio was always up and running, and that I could easily update it whenever I wanted. This is where Docker and GitHub Actions came into play.

The first thing I needed was somewhere to host my portfolio. I decided to use DigitalOcean since I had prior experience with it and I wanted to make use of the free credits the Github Education Pack offers.

Creating a droplet on DigitalOcean was straightforward, there are some tweaks that I had to do, and after all the configuration needed I ended up choosing a machine with CentOS 8, as I was more familiar with it.

After that, I installed the necessary dependencies on the server, such as Docker and git.

### The plan

After having the server up and running, I needed to come up with a plan to efficiently deploy my portfolio. I decided to use GitHub Actions to automate the deployment process. The plan was simple:

1. Set up my server with ssh keys to allow GitHub Actions to connect to it.
2. Create a GitHub Actions workflow that would log in to the server, pull the latest changes from the repository, build the Docker image, and restart the container.

This way, whenever I push changes to the `main` branch, GitHub Actions would automatically build and deploy my portfolio.

### The Deployment Process

As in the plan the first thing I did was to set up the server with ssh keys. I generated a new ssh key pair on my local machine and added the public key to the server's `authorized_keys` file. Also added the keys to my GitHub account, [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) is a good guide on how to do it.

After that was done, I created a GitHub Actions workflow that would run whenever I pushed changes to the `main` branch. The workflow was pretty simple:

```yaml
name: Deploy
on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    name: "Deploy to VPS"
    runs-on: ubuntu-latest
    steps:
      - name: Configure SSH
        run: |
          mkdir -p ~/.ssh/
          echo "$SSH_PRIVATE_KEY" > ~/.ssh/deploy_key.pem
          chmod 600 ~/.ssh/deploy_key.pem
          cat >> ~/.ssh/config << END
          Host my-vps
            HostName $SSH_IP
            User $SSH_USER
            IdentityFile ~/.ssh/deploy_key.pem
            StrictHostKeyChecking no
          END
        env:
          SSH_USER: ${{ secrets.SSH_USER }}
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          SSH_IP: ${{ secrets.SSH_IP }}

      - name: Deploy Site
        run: ssh my-vps '/root/redeploy_site.sh'

      - name: Discord Message
        run: curl -s -X POST "${{ secrets.DISCORD_WEBHOOK }}" -d "content=🚀 Deployment Successful"

  notify_failure:
    name: "Notify Failure"
    runs-on: ubuntu-latest
    needs: deploy
    if: ${{ always() && contains(needs.*.result, 'failure') }}
    steps:
      - name: Discord Message
        run: curl -s -X POST "${{ secrets.DISCORD_WEBHOOK }}" -d "content=❌ Deployment Failed"
```

The workflow does the following:

1. Configures the SSH connection to the server using the private key stored in GitHub Secrets.
2. Runs a script on the server to pull the latest changes from the repository, build the Docker image, and restart the container.
3. Sends a success/failure message to a Discord webhook.

The script that runs on the server looks like this:

```bash
#!/bin/bash

echo "Entering project"
# Enter to the project
cd /root/portfolio

echo "Updating git repo"
# Update git repo
git fetch && git reset origin/main --hard

# Update the script
echo "Updating redeploy_site.sh"
rm /root/redeploy_site.sh -f
cp redeploy_site.sh /root/redeploy_site.sh
chmod +x /root/redeploy_site.sh

echo "Updated redeploy_site.sh"
ls -l /root/redeploy_site.sh
cat /root/redeploy_site.sh

# Delete the old containers
echo "Deleting old containers"
docker compose -f docker-compose.prod.yml down

# Delete all docker volumes
echo "Deleting all docker volumes"
docker system prune -a --volumes -f

# Build the new containers
echo "Building new containers"
docker compose -f docker-compose.prod.yml up -d --build

echo "Exiting project"
```

This script is responsible for updating the repository, building the Docker image, and restarting the container. It also deletes the old containers and volumes to ensure a clean deployment.

### Conclusion

Building and deploying my personal portfolio was a great learning experience. I got to apply some of the concepts I learned as a Site Reliability Engineer and DevOps practices to a real-world project. I now have a fast, SEO-friendly portfolio that I can easily update and maintain.
