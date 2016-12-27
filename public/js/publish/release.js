/**
 * Created by Administrator on 2016/12/17 0017.
 */
/*取消和发布*/
var　$hid = $(".hid");
var $cancel = $(".cancel");
var $publish = $(".publish");
var $btn1 = $(".hid .btn1");
var $btn2 = $(".hid .btn2");
var $confirm = $(".hid .confirm");
$cancel.on("tap",function(){
    $hid.eq(0 ).show()
});
$publish.on("tap",function(){
    $hid.eq(1 ).show()
});
$btn1.on("tap",function(){
    $hid.eq(0).hide();
});
$btn2.on("tap",function(){
    location.href='../index/index.html'
});
$confirm.on("tap",function(){
    location.href='../mine/pull.html'
});

/*search跳转*/
var $search = $(".search");
var $searchBox = $(".search-box");
var $cancel2 = $(".cancel2");
var $lis = $(".search-box li");
var $search1 = $(".search1")[0];
$search.on("tap",function(){
    $searchBox.show();
});
$cancel2.on("tap",function(){
    $searchBox.hide();
    $search1.value="";
});
$lis.on("tap",function(){
    $search1.value = this.innerHTML;
    setTimeout(function(){
        $searchBox.hide();
        $search1.value = "";
    },500);
});

/*单选*/
var $radios = $(".select li");
var $str = $radios.find("i");
var $radios2 = $("table .icon-back");

$radios.on("click",function(){
    var index = $(this).index();
    $str.each(function(i){
        $str.eq(i ).removeClass("active");
        $str.eq(index).addClass("active");
    })
});

$radios2.on("click",function(){
    var $self =$(this );
    if($self.hasClass("active")){
        $self.removeClass("active");
    }else{
        $self.addClass("active");
    }
});
