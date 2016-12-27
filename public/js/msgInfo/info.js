/**
 * Created by Administrator on 2016/12/24 0024.
 */
var lis = document.getElementsByTagName("header" )[0 ].getElementsByTagName("li");
var info = document.getElementsByClassName("info")[0];
var adv = document.getElementsByClassName("adv")[0];
var demand = document.getElementsByClassName("demand")[0];
var arr = [info,adv, demand];
for(var i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onclick = function(){
        this.setAttribute("class","active");
        for(var j=0;j<arr.length;j++){
            if(j == this.index){
                arr[j ].style.display = 'block';
            }else{
                arr[j ].style.display = 'none';
                lis[j ].removeAttribute("class");
            }
        }
    }
}

/*publish*/
var $publish = $(".publish");
var $f3 = $(".f3");
var $closepub = $(".bottom");
$f3.on("tap",function(){
    $publish.show()
});
$closepub.on("tap",function(){
    $publish.hide()
});