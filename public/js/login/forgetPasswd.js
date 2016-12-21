/**
 * Created by Administrator on 2016/12/16 0016.
 */

/*发送验证码*/

window.onkeyup=function () {
    var name = document.getElementById('name');
    var mark = document.getElementById('mark');
    var pass = document.getElementById('pass');
    var passW = document.getElementById('passW');
    var btnLogin = document.getElementById('btn_login');
    var nameVal = name.value;
    var markVal = mark.value;
    var passVal = pass.value;
    var passWval = passW.value;

    if (nameVal != '' && markVal != '' && passVal != '' && passWval != ''&&c<60) {
        btnLogin.setAttribute('disabled',false);
        btnLogin.style.background = '#EA5404'

    }
    else {
        btnLogin.setAttribute('disabled',true);
        btnLogin.style.background = '#c7c7c7'
    }
};
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
