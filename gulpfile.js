/**
 * Created by Administrator on 2016/12/8 0008.
 * 安装gulp
 * npm install gulp -g  全局安装
 * npm install gulp --save-dev
 * 安装插件
 * npm install gulp-stylus --save-dev   编译stylus文件
 * npm install gulp-minify-css --save-dev   压缩css插件
 *npm install gulp-uglify         压缩js文件
 */



    //首先引入gulp模块
var gulp=require('gulp');

/*引入gulp-stylus插件*/
var stylus=require('gulp-stylus');
/*引入gulp-minify-css插件*/
var minifycss=require('gulp-minify-css');
/*  引入gulp-uglify文件*/
var uglify=require('gulp-uglify');


/*install gulp-nodemon --save-dev*/
var nodemon=require('gulp-nodemon');
var browserSync=require('browser-sync').create();
var reload=browserSync.reload;
/*启动node服务*/
gulp.task('nodemon',function(ab){
    var ft=false;
    return nodemon({
        script:"./server.js"
    }).on('start',function(){
        if(!ft){
            ab();
        ft=true}
    })
});

gulp.task('browserSync',['nodemon'],function(){
    browserSync.init({
        proxy:{
            target:'http://127.0.0.1:16938'
        },
        files:['*'],
        port:9828,
        open:false
    })
})




/*创建一个编译stylus的任务*/
gulp.task("stylus",function(){
    /*获取要编译的文件*/

  // gulp.src('./stylus/index.styl')//指定一个文件

    /*指定多个文件*/
   // gulp.src(['./stylus/index/styl','./stylus/cssstyl'])

   /*指定一个目录下所有，（不包括子目录）*/
   // gulp.src('./stylus/*.styl')

    /*指定一个目录及所有目录下的文件*/
    return  gulp.src('./stylus/**/*.styl')

        /* 执行stylus编译*/
          .pipe(stylus())
        /*输出编译后的文件*/
        .pipe(gulp.dest('./public/css'))
});

/*压缩css文件*/
/*gulp.task("minifycss",function(){
    return  gulp.src('./public/css/!**.*.css')//需要压缩的文件
        .pipe(minifycss()) //执行压缩操作
        .pipe(gulp.dest('./public/mincss/'))//输出
});*/
/*压缩多个*/
gulp.task('minifycss',['stylus'],function(){
    return gulp.src('./public/css/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public/mincss'))
})

/*压缩js文件*/
gulp.task('uglify',function(){
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/minjs'))
});



/*动态监听 +浏览器同步*/
gulp.task('watcher',['browserSync','stylus','uglify','minifycss'],function(){
    gulp.watch('./stylus/**/*.styl',['stylus']);
    gulp.watch('./public/js/**/*.js',['uglify']);
    gulp.watch('./public/css/**/*.css',['minifycss']);

    gulp.watch(['./public/css/**/*.css','./public/minjs/**/*.js']).on('change',function(){
        reload();
    })
})



/*
gulp.task("logs",function(){
    console.log("嘿嘿 我是logs")
});

gulp.task("tt", function () {
    console.log("蜡笔小新TT")
});
gulp.task("hh", function () {
    console.log("小樱")
});
/!* 先执行all,再执行minijs*!/
gulp.task('minijs',['all'],function(){
    console.log("this is mini小子")
})
//创建一个执行其他任务的任务

gulp.task('all',['logs','tt','hh'],function(){
    console.log("柯南")
});

//创建一个default任务
gulp.task("default",function(){
    console.log("this default")
})*/
