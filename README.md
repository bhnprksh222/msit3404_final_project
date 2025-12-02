DevOps Project

Frontend (NGINX) + Backend (Flask) + Docker + Kubernetes (Minikube)

Completed by: Bhanu Prakash Akepogu and Tarun Emmanuel Majhi

Date: December 2025



-> Project Overview

This project demonstrates end-to-end DevOps skills including:

Frontend web hosting using NGINX

Backend service using Flask (Python)

Containerization using Docker

Image hosting on Docker Hub

Deployments using Kubernetes

Scaling services with replicas

Pod labeling and service discovery

Testing Kubernetes deployments using curl and browser

This repository contains all files required to build, containerize, and deploy both applications.



->Technologies Used

Component	Technology
Frontend	HTML, CSS, JS, NGINX
Backend	Python Flask
Containers	Docker, Docker Hub
Orchestration	Kubernetes, Minikube
Tools	kubectl, VS Code



-> Repository Structure
/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
├── backend/
│   ├── app.py
│   ├── image.jpg
│   ├── requirements.txt
│   └── Dockerfile
│
├── kubernetes/
│   ├── frontend-deployment.yaml
│   └── (optional additional YAML files)
│
└── README.md




-> Part 1 – Application Development

Frontend (NGINX)
A simple web page served through NGINX.

Backend (Flask)
A basic Flask backend with a route returning a JPG image.

-> Part 2 – Docker Build & Push

-> Part 3 – Kubernetes Deployment (Minikube)



-> Conclusion

This project demonstrates the complete workflow of modern DevOps:

Application development
Containerization
Docker Hub publishing
Kubernetes deployment and scaling
Pod management and service discovery

Together, these components offer a strong foundation for real-world DevOps pipelines and microservice architecture.