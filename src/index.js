const Yargs = require('yargs');
const Serve = require('./app');

const argv = Yargs
    .usage('anywhere [option]')
    .option('p', {
        alias: 'port',
        describe: '端口号',
        default: 8092,
    }).option('h', {
        alias: 'host',
        describe: 'host',
        default: '127.0.0.1',
    }).option('d', {
        alias: 'root',
        descrive: 'root path',
        default: process.cwd(),
    }).version()
    .alias('v', 'version')
    .help()
    .argv; 

const Server = new Serve(argv);
Server.start();
