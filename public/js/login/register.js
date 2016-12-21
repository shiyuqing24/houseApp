/**
 * Created by Administrator on 2016/12/16 0016.
 */
var $selectTitle = $('.form-cell-input');
var $selectList = $('.select-list');
$selectTitle.on('tap', function () {
    $(this).siblings('.select-list').toggle();
});
$selectList.find('.select-li').on('tap', function () {
    var $self = $(this);
    var $parent = $self.parent('.select-list');
    var text = $self.text();
    var val = $self.data('val');
    console.log(text, val);
    $parent.siblings('.form-cell-input').text(text).data('val', val);
    $parent.hide();
});

window.onkeyup = function () {
    var name = document.getElementById('name');
    var mark = document.getElementById('mark');
    var pass = document.getElementById('pass');
    var passW = document.getElementById('passW');
    var person = document.getElementById('person');
    var btnLogin = document.getElementById('btn_login');
    var nameVal = name.value;
    var markVal = mark.value;
    var passVal = pass.value;
    var passWval = passW.value;
    var personVal=person.value;
    if (nameVal != '' && markVal != '' && passVal != '' && passWval != ''&&personVal!=''&&c<60) {
        btnLogin.setAttribute('disabled',false);
        btnLogin.style.background = '#EA5404'
        btnLogin.onclick=function(){
            location.href='registerSuccess.html'
        }
    }
    else {
        btnLogin.setAttribute('disabled',true);
        btnLogin.style.background = '#c7c7c7'
    }
}

var time=60;
var c=time;
function timeCount(){
    document.getElementById('btn_code').value=c;
    document.getElementById('btn_code').disabled='disabled';
    document.getElementById('btn_code').style.background='#c7c7c7';

    c--;
    t=setTimeout('timeCount()',1000);
    if(c<0){
        c=60;
        document.getElementById('btn_code').value='发送验证码';
        document.getElementById('btn_code').removeAttribute('disabled');
        clearTimeout(t)
    }
    return c
}
