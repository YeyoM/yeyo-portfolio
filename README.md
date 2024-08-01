# YeyoM Portfolio

This is the repository for my personal portfolio, it is a simple website that showcases my projects and skills.

## Technologies

- Next.js
- Docker
- Nginx
- Certbot
- Centos 8

## How to run locally

To run the project locally you need to have docker installed in your machine, then you can run the following command:

```bash
docker-compose -f docker-compose.yml up --build
```

## How to deploy

There is already a script and a CI and CD pipeline that uses github actions to deploy the project to a server, but if you want to deploy it manually you can run the following command:

```bash
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up --build
```

## Troubleshooting

If there are anyy troubles, please first try to run the following command:

```bash
docker system prune -a
```

## How to renew certificates

Enter the container for nginx, after that try and run

```bash
openssl x509 -enddate -noout -in <path to pem file>
```

to check if we still have time to renew. Then run

```bash
certbot --nginx renew -v
```

if we got an error try to install the following: python3-certbot-nginx. Then rerun the command. Then run the redeploy command to start the containers again
