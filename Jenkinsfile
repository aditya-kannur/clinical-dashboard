pipeline {
  agent {
    docker {
      image 'docker:20.10.7'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }

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
