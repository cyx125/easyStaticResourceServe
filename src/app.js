const Http = require('http');
const Chalk = require('chalk');
const Path = require('path');
const DefaultConfig = require('./common/config');
const Router = require('./helper/router');
const OpenUrl = require('./helper/openUrl');

class Serve {
    constructor(config) {
        this.config = Object.assign({}, DefaultConfig, config);
    }
    start() {
        const Serve = Http.createServer((req, res)=>{
            let filePath = Path.join(this.config.root, req.url);
            Router(req, res, filePath, this.config);
        });
        Serve.listen(this.config.port, ()=>{
            const address = `http://${this.config.hostname}:${this.config.port}`;
            console.info(`serve running in ${Chalk.green(address)}`);
            OpenUrl(address);
        });
    }
}
module.exports = Serve;
