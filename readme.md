# Full-Stack DevOps Project

This project demonstrates clinical dashboard, involving containerization, orchestration, and CI/CD for a Node.js backend, React frontend, and MongoDB database.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose
- **Orchestration**: Kubernetes (K8s)
- **CI/CD**: Jenkins
- **Registry**: Docker Hub

---

## 📁 Project Structure

.
├── backend/
│ ├── Dockerfile
│ ├── server.js
│ ├── routes/
│ └── models/
├── frontend/
│ ├── Dockerfile
│ └── src/
├── docker-compose.yml
├── k8s/
│ ├── frontend-deployment.yaml
│ ├── backend-deployment.yaml
│ ├── mongo-deployment.yaml
│ ├── services.yaml
│ ├── configmap.yaml
│ └── secrets.yaml
└── Jenkinsfile

---

## ⚙️ Step-by-Step Workflow

### 1. 🧱 Backend & Frontend Setup

- **Backend**: Implements RESTful APIs, connects to MongoDB, and handles routes and models.
- **Frontend**: Built with React, connects to backend via HTTP APIs.

---

### 2. 🐳 Dockerization

#### Dockerfile (Backend Example)
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

Commands:
```
docker build -t backend-image ./backend
docker run -p 5000:5000 backend-image
```
### 3. 📦 Docker Compose

Sample docker-compose.yml:
```
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mongo

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"

  mongo:
    image: mongo
    ports:
      - "27017:27017"
```
Commands:
```
docker-compose up --build -d
```

### 4. ☸️ Kubernetes Deployment

Files in /k8s:

*-deployment.yaml: Defines pods and replicas.

services.yaml: Exposes backend/frontend via ClusterIP/NodePort.

configmap.yaml & secrets.yaml: Store configuration securely.

Commands:

```
kubectl apply -f mongo-deployment.yaml
kubectl apply -f mongo-service.yaml

kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml

kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

kubectl apply -f k8s/   # or all at once

kubectl get pods,svc  # to get all running pods
```
Note: Images are pulled from Docker Hub.

Push with:

```
docker tag backend-image <your-dockerhub-username>/backend
docker push <your-dockerhub-username>/backend
```

### 5. 🔄 CI/CD with Jenkins

Run Jenkins in Docker:
```
docker run -d \
  --name jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts
  ```

Jenkins Setup:
-Add GitHub and DockerHub credentials.
-Create a pipeline from a Jenkinsfile.
-Define build steps: clone → build Docker images → push → deploy to k8s.

🌍 Accessing Services

-Frontend: http://localhost:3000 or NodePort IP

-Backend API: http://localhost:5000/api

-MongoDB: mongodb://mongo:27017

📌 Notes
Ensure Docker Desktop with Kubernetes is running.

Replace DockerHub credentials in Jenkins with your own.

Helm chart support can be added for templated K8s manifests in future improvements.

