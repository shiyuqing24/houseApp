/**
 * Created by Administrator on 2016/12/16 0016.
 */
//setInterval(test,1000);
/*
function test(){
    var name=document.getElementById('username').value;
    var pass=document.getElementById('pass').value;
    var login=document.getElementsByClassName('bt_login')[0]

    var loginClass=login.getAttribute('class')//getAttribute() 方法返回指定属性名的属性值。
    if(name==''||pass==''){
        loginClass=loginClass.replace('active','')//replace() 方法用于在字符串中用一些字符替换另一些字符
        login.setAttribute('class',loginClass)//setAttribute() 方法添加指定的属性，并为其赋指定的值。
    }else {
        loginClass=loginClass.concat('active');
        login.setAttribute('class','login active');
        login.onclick=function(){
            location.href='../person/require.html'
        }
    }
}*/
/*原生js写法*/
window.onkeyup=function(){
    var userName=document.getElementById("username");
   var passWord=document.getElementById("pass");
    var btLogin=document.getElementsByClassName("bt_login")[0];
    //getElementsByClassName() 方法返回文档中所有指定类名的元素集合，作为 NodeList 对象
   var userNameval=userName.value;
    var passWordval=passWord.value;
    if(userNameval!=""&& passWordval!="")
   {
       btLogin.disabled=false;
       btLogin.style.background="#EA5404";
       btLogin.onclick=function(){
       location.href='../person/require.html'
       }
   }
    else {
        btLogin.disabled=true;
      btLogin.style.background="#c7c7c7";
   }
}

/*jquery写法*/
/*
$(window).on("keyup",function(){
    if( $("#username").val()!=""&& $("#pass").val()!="")
    {
        $(".bt_login")[0].disabled=false;
        $(".bt_login")[0].style.background="#EA5404";
    }
    else {
        $(".bt_login")[0].disabled=true;
        $(".bt_login")[0].style.background="#c7c7c7";
    }
})*/
