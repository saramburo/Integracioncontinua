pipeline {
    agent any
    environment {
       
        IMAGE_NAME = 'cifrontendfinal'
        CONTAINER_NAME = 'cifrontendfinal'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/saramburo/Integracioncontinua.git'}"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Construir la imagen Docker usando el Dockerfile en el subdirectorio específico
                    docker.build("${env.IMAGE_NAME}:${env.BUILD_ID}", "frontend/crudfront")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image("${env.IMAGE_NAME}:${env.BUILD_ID}").inside {
                        dir('frontend/crudfront') {
                            sh 'npm install'
                            sh 'npm test'
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Detener y eliminar el contenedor existente
                    sh """
                    if [ \$(docker ps -q -f name=${env.CONTAINER_NAME}) ]; then
                        docker stop ${env.CONTAINER_NAME}
                        docker rm ${env.CONTAINER_NAME}
                    fi
                    """
                    // Desplegar un nuevo contenedor
                    docker.run(
                        image: "${env.IMAGE_NAME}:${env.BUILD_ID}",
                        name: "${env.CONTAINER_NAME}",
                        args: '-d -p 3000:3000'
                    )
                }
            }
        }
    }
}
