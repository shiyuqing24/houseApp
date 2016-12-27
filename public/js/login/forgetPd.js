/**
 * Created by Administrator on 2016/12/24 0024.
 */
setInterval(test,1000);
function test(){
    var name=document.getElementById("names" ).value;
    var password = document.getElementById("psd" ).value;
    var password2 = document.getElementById("psd2" ).value;
    var mark =  document.getElementById("mark" ).value;
    var confirm = document.getElementsByClassName("confirm")[0];
    var confirmClass =confirm.getAttribute("class");
    if(name =="" || password ==""||password2 ==""||mark ==""){
        confirmClass = confirmClass.replace("active","");
        confirm.setAttribute("class",confirmClass );
    }else{
        confirmClass = confirmClass.concat(" active");
        confirm.setAttribute("class","confirm active" );
        confirm.onclick=function(){
            location.href = 'forgetSuccess.html';
        };
    }
}

var wait=60;
function time(o){
    if (wait==0) {
        o.removeAttribute("disabled");
        o.innerHTML="获取验证码";
        o.style.backgroundColor="#ed692b";
        wait=60;
    }else{
        o.setAttribute("disabled", true);
        o.innerHTML=wait+"s后重新获取";
        o.style.backgroundColor="#8f8b8b";
        wait--;
        setTimeout(function(){
            time(o)
        },1000)
    }
}
document.getElementsByClassName("btn_mark")[0].onclick=function(){
    time(this)
};