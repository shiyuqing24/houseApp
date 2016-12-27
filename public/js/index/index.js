/**
 * Created by Administrator on 2016/12/24 0024.
 */
/*轮播图zepto*/
var $slider = $('.slider li');
var $sliderCon = $('.slider');
var $point = $('.index li');
var wd = $(window).width();
var lg = $slider.length;
var allWd = wd * lg;
var hg = wd * 0.85;
$sliderCon.width(allWd);
$slider.width(wd).height(hg);
var swipeNow = 0;
var slideTime;
$sliderCon.on('swipeLeft', function(){
    clearTimeout(slideTime);
    if(swipeNow < lg - 1){
        var swipeWd = (++swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
$sliderCon.on('swipeRight', function(){
    clearTimeout(slideTime);
    if(swipeNow > 0){
        var swipeWd = (--swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});

function autoSwipe(){
    slideTime = setTimeout(function(){
        if(swipeNow < lg - 1){
            var swipeWd = (++swipeNow) * wd;
            $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
            $point.removeClass('active').eq(swipeNow).addClass('active');
            autoSwipe();
        }
    }, 3000);
}
autoSwipe();


/*排序按钮*/
var $last = $(".last");
$last.on("tap",function(){
    var $self = $(this);
    if($self.hasClass('down')){
        $self.removeClass('down').addClass('up');
    }else if($self.hasClass('up')){
        $self.removeClass('up');
    }else{
        $self.addClass('down');
    }
});

/*search跳转*/
var $search = $(".search");
var $searchBox = $(".search-box");
var $cancel = $(".cancel");
var $clean = $(".search-box .clean");
var $lis = $(".search-box li");
var $search1 = $(".search1")[0];
$search.on("tap",function(){
    $searchBox.show();
});
$cancel.on("tap",function(){
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
$clean.on("tap",function(){
    $lis.each(function(){
        this.innerHTML = "";
    })
});


/*city*/
var $city = $(".city");
var $citylis = $(".city-box li");
var $cityBox = $(".city-box");
var $close = $(".close");


$city.on("tap",function(){
    $cityBox.show();
});
$close.on("tap",function(){
    $cityBox.hide()
});
$citylis.on("tap",function(){
    $cityBox.hide();
    $city[0].innerHTML = this.innerHTML;
    $city[1].innerHTML = this.innerHTML;

});

/*query*/
var $querylis = $(".query li" ).not(".last");
var $queryBox = $(".query-box");
var $contents = $(".content div");
var $querylis2 = $(".query-title li").not(".last");

$querylis.on("tap",function(){
    $queryBox.show();
    var index = $(this).index();
    $querylis2.each(function(i){
        $contents.eq(i).hide();
        $contents.eq(index).show();
        $querylis2.eq(i).removeClass("active");
        $querylis2.eq(index).addClass("active");
    })
});

$querylis2.on("tap",function(){
    var index = $(this).index();
    $contents.each(function(i){
        $querylis2.eq(i).removeClass("active");
        $querylis2.eq(index).addClass("active");
        $contents.eq(i).hide();
        $contents.eq(index).show();
    })

});
/*region*/
var $rels = $(".region .left" ).children();
var $rerightls = $(".region .right");
$rels.on("click",function(){
    var index = $(this).index();
    console.log(index)
    $rerightls.each(function(i){
        $rels.eq(i ).removeClass("active");
        $rels.eq(index ).removeClass("active");
        $rerightls.eq(i ).removeClass("actives");
        $rerightls.eq(index ).addClass("actives");
    });
});
/*many*/
var $ls = $(".many .left" ).children();
var $rightls = $(".many .right");
$ls.on("click",function(){
    var index = $(this).index();
    $rightls.each(function(i){
        $ls.eq(i ).removeClass("active");
        $ls.eq(index ).removeClass("active");
        $rightls.eq(i ).removeClass("actives");
        $rightls.eq(index ).addClass("actives");
    });
});


/*query 右侧li点击退出*/
var $rights = $(".content .right li");
$rights.on("click",function(){
    $queryBox.hide();
    var con = this.innerHTML;

});

/*area*/
var $arealis = $(".area li" ).not(".last");
$arealis.on("click",function(){
    if(this.index!=0){
        $arealis.eq(0 ).removeClass("active");
    }
    $queryBox.hide()
    var con = this.innerHTML
});

/*price*/
var $pricelis = $(".price li" ).not(".last");
$pricelis.on("click",function(){
    if(this.index!=0){
        $pricelis.eq(0 ).removeClass("active");
    }
    $queryBox.hide()
    var con = this.innerHTML
});



/*query confirm*/
var $confirm = $(".content .confirm")
$confirm.on("tap",function(){
    $queryBox.hide()
});

/*list icon-lo active*/
var $icons = $(".list .icon-lo");
$icons.on("click",function(){
    var $self = $(this);
    if($self.hasClass("active")){
        $self.removeClass("active");
    }else{
        $self.addClass("active");
    }
});
/*list icon-back-->details*/
var $lists = $(".list .icon-back");
$lists.on("click",function(){
    location.href = "heade.html";
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
