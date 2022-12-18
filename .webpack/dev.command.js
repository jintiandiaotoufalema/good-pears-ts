const { webpack } = require('webpack');
const devConfig = require('./dev.config');
const DevServer = require('webpack-dev-server');

const dev = {
    createWebpack(){
        const compiler = webpack(devConfig);
        // compiler.hooks.beforeCompile.tap('beforeCompile', data=>{
        //     console.log('开始打包');
        // });
        // compiler.hooks.done.tap('done', stats=>{
        //     console.log('打包完成');
        // });

        return compiler;
    },
    createDevServer(){
        const server = new DevServer({
            port: '3000',
            compress: true,
            open: true,
            hot: true
        }, this.createWebpack());

        server.startCallback(err=>{
            if(err) throw err;
        });    
    },
    init(){
        this.createDevServer();
    }
};

dev.init();