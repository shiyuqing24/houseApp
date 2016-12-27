/**
 * Created by Administrator on 2016/12/24 0024.
 */
var $sf = $("#sf");
var $hid_sf = $(".hid_sf");
var $sflis = $(".hid_sf span");

$sf.on("click",function(){
    $hid_sf.show()
});
$sflis .on("click",function(){
    $sf[0].innerHTML = this.innerHTML;
    $hid_sf.hide();
});

setInterval(test,1000);
function test(){
    var name = $("#names" ).val();
    var password = $("#psd" ).val();
    var password2 = $("#psd2" ).val();
    var mark =  $("#mark" ).val();
    var register = $(".register" );
    if(name =="" || password ==""||password2 ==""||mark ==""){
        register.removeClass("active")
    }else{
        register.addClass("active");
        var sf = $("#sf")[0].innerHTML;
        var hid_sf = $(".hid_sf span");
        register.on("click",function(){
            hid_sf.each(function(){
                var str = this.innerHTML;
                var url = this.title;
                if(str == sf){
                    if (url != "") {
                        open(url,'_self');
                    }
                }
            })
        })
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
        o.style.backgroundColor="#c7c7c7";
        wait--;
        setTimeout(function(){
            time(o)
        },1000)
    }
}
document.getElementsByClassName("btn_mark")[0].onclick=function(){
    time(this)
};