/**
 * Created by Administrator on 2016/12/27 0027.
 */
/*拨打电话*/
var $phone = $("article .icon-back");
var $hids = $(".hid" );
var $btns = $(".hid .btn");
$phone.on("click",function(){
    $hids.eq(0).show();
});
$btns.on("click",function(){
    $hids.eq(0).hide();
});

/*status*/
var $status = $(".status i");
var $hidli = $(".status li:last-child");
$status.on("click",function(){
    var $self = $(this);
    var str=$self[0 ].parentNode.className;
    if($self.hasClass("active")){
        $self.removeClass("active");
        if(str=="other"){
            $hidli.hide();
        }
    }else{
        $self.addClass("active");
        if(str=="other"){
            $hidli.show();
        }
    }
});

/*confirm*/
var $confirms = $("footer .confirms");
var $confirm = $(".hid .confirm");
$confirms.on("click",function(){
    $hids.eq(1).show();
});
$confirm.on("click",function(){
    location.href='index.html';
});
