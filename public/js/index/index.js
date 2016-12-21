//获取轮播的每个元素
var $slider=$('.slider_block');
//获取轮播容器
var $sliderCon=$('.slider_container');
//获取所有的点
var $point=$('.point_block');

//获取屏幕的宽度
var wd=$(window).width();
//获取轮播个数
var lg=$slider.length;
//计算容器宽度
var allWd=wd*lg;
//计算元素高度
var hg=wd*0.85;
//设置容器宽度
$sliderCon.width(allWd);
//设置元素宽高
$slider.width(wd).height(hg);

//表示当前元素
var swipeNow=0;
var slideTime=0;

//添加滑动事件
$sliderCon.on('swipeLeft',function(){
    clearTimeout(slideTime);
    if(swipeNow<lg-1){
        //计算滑动距离，改变当前元素
        var swipeWd=(++swipeNow)*wd;
        $sliderCon.css('transform','translateX(-'+swipeWd+'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
})
$sliderCon.on('swipeRight',function(){
    clearTimeout(slideTime);
    if(swipeNow>0){
        //计算滑动距离，改变当前元素
        var swipeWd=(--swipeNow)*wd;
        $sliderCon.css('transform','translateX(-'+swipeWd+'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
/*轮播图定时器*/
function autoSwipe(){
    slideTime=setTimeout(function(){
        if(swipeNow<lg-1){
            //计算滑动距离，改变当前元素
            var swipeWd=(++swipeNow)*wd;
            $sliderCon.css('transform','translateX(-'+swipeWd+'px)');
            //改变点的选中
            $point.removeClass('active').eq(swipeNow).addClass('active');
            autoSwipe();
        }
    },2000)
}
autoSwipe();
/*下拉选择框*/
var $queyrBlock=$('.query_block');
$queyrBlock.on('tap',function(){
    var $self=$(this);
    var index=$self.index();
    console.log(index);
    if($self.hasClass('active')){
        $self.removeClass('active');
        $('.down-box').eq(index).hide();
    }
    else{
        $queyrBlock.removeClass('active');
        $self.addClass('active');
        $('.down-box').hide().eq(index).show();
    }
});

/*价格 筛选*/
$('.query_price').on('tap',function(){
    var $self=$(this);
    if($self.hasClass('active-down')){
        console.log('up')
        $self.removeClass('active-down').addClass('active-up');
    }
    else if($self.hasClass('active-up')){
        console.log('normal');
        $self.removeClass('active-up');
    }else{
        console.log('down');
        $self.addClass('active-down');
    }
});

/*小爱心*/
var $heart=$('.info-title ')
$heart.on('tap',function(){
    var $self=$(this);
    if($self.hasClass('heart')){
        $self.removeClass('heart')
        console.log('有')
    }
    else{
        $heart.removeClass('heart');
        $self.addClass('heart');
    }
});
/* footer*/
var $one=$('.end_one')
$one.on('tap',function(){
    var $self=$(this);
    var $text=$self.children('span');//子集span标签
    if(!$self.hasClass('active_one')){//没有active_one
        $self.removeClass('end_one').addClass('active_one')
       $text.removeClass('one').addClass('end_texts')
    }
    else{
        $self.removeClass('active_one').addClass('end_one')
        $text.addClass('one').removeClass('end_texts')
    }
});
var $two=$('.end_two')
$two.on('tap',function(){
    var $self=$(this);
    var $text=$self.children('span');//子集span标签
    if(!$self.hasClass('active_two')){//没有active_one
        $self.removeClass('end_two').addClass('active_two')
        $text.removeClass('end_text').addClass('one')
   /*     local();*/
    }
    else{
        $self.removeClass('active_two').addClass('end_two')
        $text.addClass('end_text').removeClass('one')
    }
});
/*跳转链接*/
function local(){
    location.href='127.0.0.1:9888/login/homePage.html'
}
var $four=$('.end_four')
$four.on('tap',function(){
    var $self=$(this);
    var $text=$self.children('span');//子集span标签
    if(!$self.hasClass('active_four')){//没有active_one
        $self.removeClass('end_four').addClass('active_four')
        $text.removeClass('end_text').addClass('one')
        /*     local();*/
    }
    else{
        $self.removeClass('active_four').addClass('end_four')
        $text.addClass('end_text').removeClass('one')
    }
});
var $five=$('.end_five')
$five.on('tap',function(){
    var $self=$(this);
    var $text=$self.children('span');//子集span标签
    if(!$self.hasClass('active_five')){//没有active_one
        $self.removeClass('end_five').addClass('active_five')
        $text.removeClass('end_tex').addClass('one1')
        /*     local();*/
    }
    else{
        $self.removeClass('active_five').addClass('end_five')
        $text.addClass('end_tex').removeClass('one1')
    }
});

var $three=$('.end_three');
$three.on('tap',function(){
    var $self=$(this);
    var $hide=$self.children('div')
if($hide.css('display')=='none'){
    $hide.show()
}else{
    $hide.hide()
}
});
var $bottomList=$('.bottom-list');
$bottomList.on('tap',function(){
    var $self=$(this);




})