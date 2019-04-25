
node {
  def myNodeImage

    stage('Clone Repository') {
    
        checkout scm
    }
    stage('Build Image'){


      myNodeImage = docker.build("my-image:0.0.0")
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
