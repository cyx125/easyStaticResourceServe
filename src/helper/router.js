const Fs = require('fs');
const Path = require('path');
const Promisify = require('util').promisify;
const Stat = Promisify(Fs.stat);
const Readdir = Promisify(Fs.readdir);
const Handlebars = require('handlebars');
const tplPath = Path.join(__dirname, '../templates/dir.tpl');
const tplSource = Fs.readFileSync(tplPath);
const mine = require('./mine');
const template = Handlebars.compile(tplSource.toString());
const Compress = require('./compress');

module.exports = async function( req, res, filePath, config) {
    try{
        /** 判断类型 */
        const Stats = await Stat(filePath);
        if(Stats.isFile()){
            const mineType = mine(filePath);
            res.statusCode = 200;
            res.setHeader('Content-type', mineType);
            let rs = Fs.createReadStream(filePath);
            rs.setEncoding('UTF-8');
            if(filePath.match(config.compress)) {
                rs = Compress(rs, req, res);
            }
            rs.pipe(res);
        }else if(Stats.isDirectory()) {
            /** 显示文件夹内容 */
            const files = await Readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            let dir = Path.relative(config.root, filePath);
            const data = {
                files: files.map(file => ({
                    dir: file,
                    mime: mine(file),
                })),
                dir: dir?`/${dir}`:'',
                title: Path.basename(filePath),
            };
            res.end(template(data));
        }
    }catch(err){
        console.info(err);
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/plain');
        res.write(filePath);
        res.end(err);
        
    }
};
