const Fs = require('fs');
const Path = require('path');
const Promisify = require('util').promisify;
const Stat = Promisify(Fs.stat);
const Readdir = Promisify(Fs.readdir);
const Handlebars = require('handlebars');
const tplPath = Path.join(__dirname, '../templates/dir.tpl');
const tplSource = Fs.readFileSync(tplPath);
const Config = require('../common/config');
const template = Handlebars.compile(tplSource.toString());
module.exports = async function( req, res, filePath){
    try{
        /** 判断类型 */
        const Stats = await Stat(filePath);
        if(Stats.isFile()){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/plain');
            Fs.createReadStream(filePath).pipe(res);
        }else if(Stats.isDirectory()){
            /** 显示文件夹内容 */
            const files = await Readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            let dir = Path.relative(Config.root, filePath);
            const data ={
                files,
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
