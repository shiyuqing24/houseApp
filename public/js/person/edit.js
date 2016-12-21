/**
 * Created by Administrator on 2016/12/21 0021.
 */
var $btn=$('.btns');
var $dateBox=$('.datebox');
var $hid=$('.hid');
var $cancel=$('.btn1');
var $confirm=$dateBox.find('.btn2');
var $con=$hid.find('.btn2')
var $date=$dateBox.find('input');
$btn.on('tap',function(){
    $date[0].val='';
    $dateBox.show();
});
$confirm.on('tap',function(){
    $dateBox.hide();
    $hid.show();
});
$cancel.on('tap',function(){
    $dateBox.hide();
    $hid.hide();
});
$con.on('tap',function(){
    var date=$date.val();
    location.href='edit.html'
})