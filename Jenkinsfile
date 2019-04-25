
node {
  def myNodeImage

    stage('Clone Repository') {
    
        checkout scm
    }
    stage('Build Image'){

      docker.withRegistry('54.77.173.51:5000')

      myNodeImage = docker.build("my-image:0.0.0", "./dockerfiles/test")
    }
    stage('Test Image'){

      myNodeImage.inside {
        echo "Image operational"
      }
    }
    stage('Push Image'){
        docker.withRegistry('https://localhost:5000'){

          myNodeImage.push()
      }
    }
   }
