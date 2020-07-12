// 获取标签元素节点
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

// 完成一个drag拖拽函数
function drag(obj) {
    // 绑定元素被鼠标点击响应函数
    obj.onmousedown = function (event) {
        // 考虑兼容
        event = event || window.event;

        // 获取元素与鼠标的相对位置
        var ol = event.clientX - obj.offsetLeft;
        var ot = event.clientY - obj.offsetTop;

        // 将鼠标点击事件捕获
        obj.setCapture && obj.setCapture();

        // 为元素移动绑定响应函数,因为是在document里移动，所以是为document绑定
        document.onmousemove = function (event) {
            // 考虑兼容
            event = event || window.event;

            // 获取滑动距离
            var sl = document.documentElement.scrollLeft;
            var st = document.documentElement.scrollTop;

            // 获取鼠标坐标
            var x = event.clientX - ol;
            var y = event.clientY - ot;

            // 为元素移动坐标设置样式
            obj.style.left = x + sl + "px";
            obj.style.top = y + st + "px";

            // 取消对事件的捕获
            obj.releaseCapture && obj.releaseCapture();

        }
        // 为元素结束鼠标移动绑定响应函数
        document.onmouseup = function () {
            // 将onmousemove与onmouseup事件设置为null，即可结束操作
            document.onmousemove = null;
            document.onmouseup = null;

            // 避免浏览器的默认搜索行为
            return false;
        }
    }
}

drag(box1);
drag(box2);