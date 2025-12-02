# DevOps Project

### Frontend (NGINX) + Backend (Flask) + Docker + Kubernetes (Minikube)

**Completed by:**

- **Bhanu Prakash Akepogu**
- **Tarun Emmanuel Majhi**

**Date:** December 2025

---

## Project Overview

This project demonstrates a complete end-to-end DevOps workflow, integrating:

- **Frontend web hosting** using NGINX
- **Backend REST API** using Flask (Python)
- **Containerization** with Docker
- **Image hosting** on Docker Hub
- **Kubernetes deployments** on Minikube
- **Scaling services** using replicas
- **Pod labeling and service discovery**
- **Testing** via browser and `curl`

The repository includes all files required to build, containerize, and deploy both applications.

---

## Technologies Used

| Component         | Technology                   |
| ----------------- | ---------------------------- |
| **Frontend**      | HTML, CSS, JavaScript, NGINX |
| **Backend**       | Python, Flask                |
| **Containers**    | Docker, Docker Hub           |
| **Orchestration** | Kubernetes, Minikube         |
| **Tools**         | kubectl, VS Code             |

---

## Repository Structure

```
/
├── backend/
│   ├── static/
│   │   └── img.jpg
│   ├── Dockerfile
│   ├── app.py
│   ├── backend-deployment.yml
│   ├── backend-service.yml
│   └── requirements.txt
│
├── frontend/
│   ├── Dockerfile
│   ├── about.html
│   ├── frontend-deployment.yml
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

---

## Part 1 – Application Development

### **Frontend (NGINX)**

A simple static webpage built using HTML, CSS, and JavaScript, served via an NGINX container.

### **Backend (Flask)**

A lightweight Flask backend containing:

- A root route returning a greeting message
- An image endpoint returning a JPG file

---

## Part 2 – Docker Build & Push

Both applications were containerized with Docker.  
Steps included:

1. Creating Dockerfiles for frontend and backend
2. Building images with `docker build`
3. Tagging images
4. Uploading images to Docker Hub using `docker push`

These images were later used in Kubernetes deployments.

---

## Part 3 – Kubernetes Deployment (Minikube)

The Kubernetes deployment includes:

- A **backend deployment** with 3 replicas
- A **frontend deployment** with 4 replicas
- Service exposure using **ClusterIP** and **NodePort**
- Pod verification using:

Minikube tunnel or service URLs were used to test accessibility from the browser and via `curl`.

---

## Conclusion

This project demonstrates a fully functional DevOps pipeline, including:

- Application development
- Containerization
- Docker Hub publishing
- Kubernetes deployment and scaling
- Pod management
- Service discovery
- External access testing

Together, these components showcase practical skills essential for modern DevOps and microservices-based architecture development.

---
