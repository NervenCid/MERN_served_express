pipeline{
    agent {
        node {
            label 'RaspberryPi'
        }
    }
    environment {
        CI = 'true'
    }
    stages{
        stage("Build"){
            steps{
                echo "Building image"
                sh 'docker rm -f $(docker ps -qa) || true'
                sh 'docker rmi $(docker images -q) || true' 
                sh 'docker build -t mern .'
            }
        }  
        stage("Test"){
            steps{
                echo "Hola soy el Test"
            }
        }
        stage("Deliver"){
            steps{
                echo "Deploying"
                sh 'docker run -d --publish 4000:4000 mern'
            }
        }      
    }
}