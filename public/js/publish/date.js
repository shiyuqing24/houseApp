/**
 * Created by Administrator on 2016/12/27 0027.
 */
var $hids = $(".hid");
/*拨打电话*/
var $phone = $("article .icon-back");
var $phoneBox = $hids.eq(0);
var $btns = $(".hid .btn");
$phone.on("click",function(){
    $phoneBox.show();
});
$btns.on("click",function(){
    $phoneBox.hide();
});

/*dateconfirm*/
var $confirmBox = $hids.eq(1);
var $confirmBox2 = $hids.eq(2);
var $confirm = $("header .confirm");
var $cancel = $confirmBox.find(".cancel");
var $confirm1 = $confirmBox.find(".confirm");
var $confirm2 = $confirmBox2.find(".confirms");
$confirm.on("click",function(){
    $confirmBox.show();
});
$cancel.on("click",function(){
    $confirmBox.hide();
});
$confirm1.on("click",function(){
    $confirmBox2.show();
});

$confirm2.on("click",function(){
    location.href = 'details.html';
});

