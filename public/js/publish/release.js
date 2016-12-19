/**
 * Created by Administrator on 2016/12/17 0017.
 */
/*单选 选择框*/

var $radioList=$('.radio_box .radio_block');
$radioList.on('tap',function(){
    var $self=$(this);
    if(!$self.hasClass('selected')){
        $radioList.removeClass('selected');
        $self.addClass('selected')
    }
});
/*下拉选择框*/
var $selectTitle=$('.select-title');
var $selectList=$('.select-list');
$selectTitle.on('tap',function(){
    //siblings() 获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的。
    //toggle() 方法切换元素的可见状态
    $(this).siblings('.select-list').toggle();
});

$selectList.find('.select-li').on('tap',function(){
    var $self=$(this);
    var $parent=$self.parent('.select-list');
    var text=$self.text();
    //var val=$self.data('val');//data() 方法向被选元素附加数据，或者从被选元素获取数据。
    console.log(text)
    $(".select-title").val(text);
    $parent.hide();
});
