/**
 * Created by Administrator on 2016/12/27 0027.
 */
/*拨打电话*/
var $phone = $("article .icon-back");
var $phoneBox = $(".hid");
var $btns = $(".hid .btn");
$phone.on("click",function(){
    $phoneBox.show();
});
$btns.on("click",function(){
    $phoneBox.hide();
});
