pipeline {
    agent any
    parameters {
        choice(name: 'PIPELINE_STAGE', choices: ['build', 'deploy'], description: 'Seleccione el pipeline a ejecutar')
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/saramburo/Integracioncontinua.git'
            }
        }
        stage('Build Pipeline') {
            when {
                expression { params.PIPELINE_STAGE == 'build' }
            }
            stages {
              
               
                stage('Build Frontend') {
                    steps {
                        script {
                            docker.build('cifrontendfinal', "C:\Users\sergi\OneDrive\Documentos\GitHub\Integracioncontinua\frontend\crudfront\")
                        }
                    }
                }
                stage('Test Frontend') {
                    steps {
                        script {
                            docker.image('cifrontendfinal').inside {
                                sh 'npm test'
                            }
                        }
                    }
                }
            }
        }
        stage('Deploy Pipeline') {
            when {
                expression { params.PIPELINE_STAGE == 'deploy' }
            }
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
