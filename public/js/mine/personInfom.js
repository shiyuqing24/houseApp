/**
 * Created by Administrator on 2016/12/27 0027.
 */
var tips = document.getElementsByClassName("tips");
var hid = document.getElementsByClassName("hid")[0];
var hidden = document.getElementsByClassName("hidden")[0];
var cancel = document.getElementById("cancel");
var inputs = document.querySelectorAll("input[type=text]");
for(var j=0;j<inputs.length;j++){
    inputs[j ].onclick = function(){
        this.parentNode.setAttribute("class","active" );
    };
    inputs[j ].onblur = function(){
        this.parentNode.setAttribute("class","" );
    };
}
for(var i=0;i<tips.length;i++){
    tips[i ].onclick = function(){
        hid.style.display = 'block';
        hidden.style.display = 'block';
    };
}
cancel.onclick = function(){
    hid.style.display = 'none';
    hidden.style.display = 'none';
};