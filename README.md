# DevOps User Dashboard

A hands-on DevOps learning project that demonstrates how to build, containerize, and manage a simple full-stack application using modern DevOps tools and practices.

## Project Overview

This project consists of:

* Frontend: HTML, CSS
* Backend: Node.js + Express REST API
* Dockerized frontend using Nginx
* Dockerized backend using Node.js
* Multi-container management using Docker Compose

This project is being built step by step to learn real-world DevOps workflows, from local development to cloud deployment and Kubernetes.

---

# Architecture

```
                Browser
                    │
          http://localhost:8080
                    │
                    ▼
          +------------------+
          | Frontend (Nginx) |
          +------------------+
                    │
         HTTP Requests (API)
                    │
                    ▼
        +----------------------+
        | Backend (Node.js)    |
        | Express REST API     |
        +----------------------+
```

---

# Project Structure

```text
devops-project/
│
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   └── style.css
│
├── backend/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── compose.yaml
├── .gitignore
└── README.md
```

---

# Features

## Frontend

* Responsive HTML/CSS UI
* Fetch users from backend API
* Simple dashboard

## Backend

* Express.js REST API
* Health Check Endpoint
* Get Users Endpoint
* Create User Endpoint
* CORS enabled

---

# API Endpoints

## Health Check

```http
GET /health
```

Response

```json
{
  "status": "UP"
}
```

---

## Get Users

```http
GET /users
```

---

## Create User

```http
POST /users
```

Request

```json
{
  "name": "John"
}
```

---

# Running Locally

## Backend

```bash
cd backend
npm install
node app.js
```

Backend

```
http://localhost:3000
```

---

## Frontend

```bash
cd frontend
python3 -m http.server 8000
```

Frontend

```
http://localhost:8000
```

---

# Docker

## Build Frontend

```bash
cd frontend
docker build -t frontend:v1 .
```

## Run Frontend

```bash
docker run -d -p 8080:80 --name frontend frontend:v1
```

---

## Build Backend

```bash
cd backend
docker build -t backend:v1 .
```

## Run Backend

```bash
docker run -d -p 3000:3000 --name backend backend:v1
```

---

# Docker Compose

Start the complete application

```bash
docker compose up --build
```

Stop all containers

```bash
docker compose down
```

---

# Technologies Used

* Linux (WSL)
* Git
* GitHub
* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* Docker
* Docker Compose
* Nginx

---

# Learning Progress

## Completed

* Linux Basics
* Git Fundamentals
* GitHub
* REST API Development
* HTML/CSS Frontend
* Docker Images
* Docker Containers
* Dockerfiles
* Docker Compose

## Coming Next

* GitHub Actions (CI)
* Docker Hub
* AWS EC2
* AWS IAM
* AWS VPC
* AWS S3
* Application Load Balancer
* AWS CloudWatch
* Terraform
* Kubernetes

---

# Author

**Sanjay**

Cloud & DevOps Engineer Portfolio Project

Built as part of a structured journey toward Cloud and DevOps Engineering.

