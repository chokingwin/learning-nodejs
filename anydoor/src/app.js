const http = require('http');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
    const filePath = path.join(conf.root, req.url);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`${filePath} is not a directory or file.`);
        }

        if (stats.isFile()) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            // fs.readFile(filePath, (err, data) => {
            //     res.end(data);
            // });
            fs.createReadStream(filePath).pipe(res);
        } else if (stats.isDirectory()) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            fs.readdir(filePath, (err, files) => {
                res.end(files.join(','));
            });
        }
    });
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server running at ${chalk.green(addr)}`);
});