pipeline {
  agent any

  environment {
    DOCKERHUB_REPO = "adityakannur"
  }

  stages {
    stage('Clone Repo') {
      steps {
        git credentialsId: 'github-creds', url: 'https://github.com/adityakannur/clinical-dashboard', branch: 'master'
      }
    }

    stage('Build Backend Image') {
      steps {
        echo '📦 Building backend Docker image...'
        script {
          docker.build("${DOCKERHUB_REPO}/clinical-backend", "./backend")
        }
      }
    }

    stage('Build Frontend Image') {
      steps {
        echo '📦 Building frontend Docker image...'
        script {
          docker.build("${DOCKERHUB_REPO}/clinical-frontend", "./frontend")
        }
      }
    }

    stage('Push Images') {
      steps {
        echo '🚀 Pushing images to Docker Hub...'
        script {
          docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
            docker.image("${DOCKERHUB_REPO}/clinical-backend").push()
            docker.image("${DOCKERHUB_REPO}/clinical-frontend").push()
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        echo '🔧 Deploying to Kubernetes (optional step)...'
        // Uncomment below if Jenkins host has access to kubectl
        // sh 'kubectl apply -f k8s/'
      }
    }
  }
}
