/**
 * Created by Administrator on 2016/12/27 0027.
 */
/*接受需求*/
var circle = document.getElementsByClassName("circle")[0];
circle.onclick = function(){
    var cs = circle.getAttribute("class");
    if(cs === 'circle'){
        this.setAttribute("class","active")
    }else{
        this.setAttribute("class","circle")
    }
};
/*清除缓存*/
var cache = document.getElementById("caches");
var count = document.getElementsByClassName("count")[0];
var hid = document.getElementsByClassName("hid");
var cancel = document.getElementsByClassName("btn1");
var confirm = document.getElementsByClassName("btn2");
cache.onclick = function(){
    hid[0].style.display = 'block';
};
cancel[0].onclick = function(){
    hid[0].style.display = 'none';
};
confirm[0].onclick = function(){
    hid[0].style.display = 'none';
    count.innerText = 0;
};
/*退出*/
var outLogin = document.getElementsByClassName("outLogin")[0];
outLogin.onclick = function(){
    hid[1].style.display = 'block';
};
cancel[1].onclick = function(){
    hid[1].style.display = 'none';
};
confirm[1].onclick = function(){
    hid[1].style.display = 'none';
    location.href = 'oneself.html';
};