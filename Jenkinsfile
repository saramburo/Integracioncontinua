pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/saramburo/Integracioncontinua.git'
            }
        }

        stage('Test Docker Commands') {
            steps {
                script {
                    // Verificar la versión de Docker
                    sh 'docker --version'

                    // Mostrar información detallada de Docker
                    sh 'docker info'
                    
                    // Ejecutar otro comando de Docker para probar, según tus necesidades
                    sh 'docker ps'
                }
            }
        }

        // Añade otros stages según tu configuración actual
    }
}
