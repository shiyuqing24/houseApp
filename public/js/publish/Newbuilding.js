/**
 * Created by Administrator on 2016/12/20 0020.
 */
var　$hid = $(".hid");
var $confirm = $(".box3_name");
var $confirms = $(".hid .confirms");
$confirm.on("tap",function(){
    $hid.show()
});
$confirms.on("tap",function(){
    $hid.hide();
});
