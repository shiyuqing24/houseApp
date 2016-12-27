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
    target: 'http://guanjp.com:9805',
    changeOrigin:true,
    ws:true,
    cookieRewrite:true,
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

var publicPath = path.join(__dirname, 'public')
/*指定访问静态资源文件的路径*/
app.use('/public', express.static(publicPath))


/*定义一个接口*/
app.get('login', function (req, res) {
    res.send('蜡笔小新')
})

var sha1 = require("sha1");
//定义验证接口
app.use('/weixin', function(req, res){
    //获取get传递数据
    var obj = req.query;
    console.log("weixin", obj);
    //将数据添加到一个数组
    var arr = ["shiyuqing", obj.timestamp, obj.nonce];
    //排序
    arr.sort();

    //拼接字符串，并进行 sha1 加密
    var str = sha1(arr.join(""));
    console.log('sha1   ', str);

    console.log('signature', obj.signature === str);
    //匹配是否是微信请求
    if( obj.signature === str){
        //成功返回 echostr 随机字符串
        res.send(obj.echostr).end();
    }else{
        res.send("验证失败").end();
    }
});

/*监听端口9999， 用来启用服务*/
app.listen(16938, function () {
    console.log("server tun at port 16938")
});

/*模块导出*/
module.express = app;