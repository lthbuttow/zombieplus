pipeline {
    agents any
    stages {
        stage('Build') {
            sh "npm install"
        }
        stage('Tests') {
            sh "npm test"
        }
    }
}