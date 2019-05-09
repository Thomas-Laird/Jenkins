
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
        docker.withRegistry('https://ip-172-31-32-240.eu-west-1.compute.local'){

          myNodeImage.push()
      }
    }
        
    
   }
