/*引入path内置模块*/
var path = require('path');

/*引入express依赖模块，用来启动静态服务器*/
var express = require('express');
/*实例express*/
var app = express();

/*引入转发请求插件*/
/*npm install http-proxy-middleware --save*/
var proxy = require('http-proxy-middleware')

/*定义通过API 访问请求，转发到指定路径*/
app.use('/api', proxy({
    target: 'http://122.10.30.153:9901',
    pathRewrite: {
        '^/api':'/'
    }
}))
/*
hhtp://127.0.0.1:9888/api/index
* 替换为：'http://122.10.30.153:9901/index',
* */




/*指定访问页面的路径*/
var viewsPath = path.join(__dirname, 'views');

app.use('/', express.static(viewsPath));
/*‘/’是网页地址,express.static()硬盘路径*/
/*console.log(__dirname):意思:D:\第四项目\12.07\project-nodejs */
/*allPath意思：拼接物理路径，用来指定虚拟路径（静态页面文件）*/

/*拼接物理路径，用来指定虚拟路径的访问（静态资源文件）*/
var publicPath = path.join(__dirname, 'public')
/*指定访问静态资源文件的路径*/
app.use('/public', express.static(publicPath))


/*定义一个接口*/
app.get('login', function (req, res) {
    res.send('蜡笔小新')
})


/*监听端口9999， 用来启用服务*/
app.listen(9999, function () {
    console.log("server tun at port 9999")
});

/*模块导出*/
module.express = app;