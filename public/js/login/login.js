/**
 * Created by Administrator on 2016/12/24 0024.
 */
setInterval(test,1000);
function test(){
    var name=document.getElementById("names" ).value;
    var password = document.getElementById("psd" ).value;
    var login = document.getElementsByClassName("login")[0];
    var loginClass =login.getAttribute("class");
    if(name =="" || password ==""){
        loginClass = loginClass.replace("active","");
        login.setAttribute("class",loginClass );
    }else{
        loginClass = loginClass.concat(" active");
        login.setAttribute("class","login active" );
        login.onclick=function(){
            location.href = '../my/login-success.html';
        };
    }
}