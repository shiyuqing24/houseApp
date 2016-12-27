/**
 * Created by Administrator on 2016/12/27 0027.
 */
/*取消和上传*/
var $hids = $(".hid");
var $cancel = $("header .cancel");
var $upload = $("header .upload");
var $cancelBtn = $hids.eq(0 ).find(".cancel");
var $confirmBtn = $hids.eq(0 ).find(".confirm");
var $uploadConfirm = $hids.eq(1).find(".confirms");
$cancel.on("click",function(){
    $hids.eq(0 ).show();
});
$cancelBtn.on("click",function(){
    $hids.eq(0 ).hide();
});
$confirmBtn.on("click",function(){
    location.href = 'details.html';
});
$upload.on("click",function(){
    $hids.eq(1).show();
});
$uploadConfirm.on("click",function(){
    location.href = 'details.html';
});
