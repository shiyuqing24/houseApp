/**
 * Created by Administrator on 2016/12/20 0020.
 */
var $publish=$('.publish');
var $f3=$('.f3');
var $closepub=$('.bottom');
$f3.on('tap',function(){
    $publish.show()
});
$closepub.on('tap',function(){
    $publish.hide()
})