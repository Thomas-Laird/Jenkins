pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        checkout scm

        docker.withRegistry('54.77.173.51:5000')

        def myNodeImage = docker.build("my-image:0.0.0", "./dockerfiles/test")

        myNodeImage.push()
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}
