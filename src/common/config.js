let config = {
    hostname: '127.0.0.1',
    port: 8079,
    root: process.cwd(),
    compress: /\.(html|js|css|md)/, // 匹配需要压缩的文件格式
};
module.exports = config;
