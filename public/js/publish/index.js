/**
 * Created by Administrator on 2016/12/27 0027.
 */
/*接单*/
var $lis = $(".status");
$lis.on("click",function(){
    $(this ).addClass("active" ).text("已接单，待反馈");

});

/*跳转详情*/
var $cons = $("section .con");
$cons.on("click",function(){
    location.href = "bespoke.html"
});
/*删除*/
var $section = $("section");
$section.on("swipeLeft",function(){
    $(this).css("left","-18%")
});
$section.on("swipeRight",function(){
    $(this).css("left","0")
});

/*publish*/
var $publish = $(".publish");
var $f3 = $(".f3");
var $closepub = $(".bottom");
$f3.on("tap",function(){
    $publish.show()
});
$closepub.on("tap",function(){
    $publish.hide()
});
