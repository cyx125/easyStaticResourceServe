const Http = require('http');
const Chalk = require('chalk');
const Path = require('path');
const Config = require('./common/config');
const Router = require('./helper/router');

const Serve = Http.createServer((req, res)=>{
    let filePath = Path.join(Config.root, req.url);
    Router(req, res, filePath);
    
});
Serve.listen(Config.port, ()=>{
    const address = `http://${Config.hostname}:${Config.port}`;
    console.info(`serve running in ${Chalk.green(address)}`);
});
