pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git credentialsId: 'github-creds', url: 'https://github.com/aditya-kannur/clinical-dashboard', branch: 'master'
      }
    }

    stage('Build Backend Image') {
      steps {
        echo '📦 Building backend Docker image...'
        dir('backend') {
          sh 'docker build -t clinical-backend .'
        }
      }
    }

    stage('Build Frontend Image') {
      steps {
        echo '🎨 Building frontend Docker image...'
        dir('frontend') {
          sh 'docker build -t clinical-frontend .'
        }
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Run test cases...'
        // Add test commands here
      }
    }

    stage('Deploy') {
      steps {
        echo '🚀 Deploying the app...'
        // Add deploy steps (e.g., `docker-compose up` or `kubectl apply`)
      }
    }
  }
}
