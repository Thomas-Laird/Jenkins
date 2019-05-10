
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
        docker.withRegistry('https://ip-172-31-32-240.eu-west-1.compute.internal'){

          myNodeImage.push()
      }
   }

   stage('Build Image'){
      sh "docker run -d -p 8090:8090 --name test_container ip-172-31-32-240.eu-west-1.compute.internal/my-image:0.0.0"   
   }
}
