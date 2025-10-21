module.exports = {
  apps: [{
    name: 'admin',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/html/devops-admin',
    instances: 1,
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
}