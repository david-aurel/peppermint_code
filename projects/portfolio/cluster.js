const cluster = require('cluster');
const os = require('os');

cluster.setupMaster({
    exec: './portfolio_app.js'
});

for (let i = 0, length = os.cpus().length; i < length; i++) {
    cluster.fork();
}

cluster.on('exit', function(worker) {
    console.log(worker.process.pid + ' died');
    cluster.fork();
});
