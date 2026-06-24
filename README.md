# DevOps User Dashboard

A simple full-stack application built to practice core DevOps concepts including Linux, Git, GitHub, Docker, and containerized application deployment.

## Project Overview

This project consists of:

* Frontend: Static HTML/CSS dashboard
* Backend: Node.js + Express REST API
* Dockerized frontend using Nginx
* Dockerized backend using Node.js

The goal of this project is to build a foundation for future DevOps topics such as Docker Compose, GitHub Actions, Terraform, AWS, and Kubernetes.

---

## Project Structure

```text
devops-project/

├── frontend/
│   ├── index.html
│   ├── style.css
│   └── Dockerfile
│
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
├── .gitignore
└── README.md
```

---

## Features

### Backend API

* Health Check Endpoint
* Get Users Endpoint
* Create User Endpoint
* Express.js REST API
* CORS Enabled

### Frontend

* Simple User Dashboard
* Fetch Users Button
* API Integration Using Fetch API

---

## API Endpoints

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "UP"
}
```

### Get Users

```http
GET /users
```

Response:

```json
[
  {
    "id": 1,
    "name": "Sanjay"
  }
]
```

### Create User

```http
POST /users
```

Request:

```json
{
  "name": "John"
}
```

Response:

```json
{
  "id": 2,
  "name": "John"
}
```

---

## Running Locally

### Backend

```bash
cd backend

npm install

node app.js
```

Backend URL:

```text
http://localhost:3000
```

### Frontend

```bash
cd frontend

python3 -m http.server 8000
```

Frontend URL:

```text
http://localhost:8000
```

---

## Docker

### Build Frontend Image

```bash
cd frontend

docker build -t frontend:v1 .
```

### Run Frontend Container

```bash
docker run -d -p 8080:80 --name frontend frontend:v1
```

Frontend URL:

```text
http://localhost:8080
```

---

### Build Backend Image

```bash
cd backend

docker build -t backend:v1 .
```

### Run Backend Container

```bash
docker run -d -p 3000:3000 --name backend backend:v1
```

Backend URL:

```text
http://localhost:3000
```

---

## Technologies Used

* Linux (WSL)
* Git
* GitHub
* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* Docker
* Nginx

---

## DevOps Learning Roadmap

Completed:

* Linux Basics
* Git & GitHub
* REST API Development
* Docker Fundamentals
* Docker Images
* Docker Containers

Upcoming:

* Docker Compose
* GitHub Actions CI/CD
* Terraform
* AWS EC2
* AWS IAM
* AWS VPC
* AWS S3
* AWS Load Balancer
* AWS CloudWatch
* Kubernetes

---

## Author

Sanjay

DevOps & Cloud Engineering Learning Project
