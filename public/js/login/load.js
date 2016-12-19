/**
 * Created by Administrator on 2016/12/16 0016.
 */
function checkNul(obj) {
    var id = obj.id + '_tips';
    /*通过id获取提示文本对象*/
    var tips = document.getElementById(id);
    if (obj.value == '') {
        tips.style.display = 'inline-block';
        return false;
    }
    else {
        tips.style.display = 'none'
        return true
    }
}