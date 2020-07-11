// 获取box1盒子节点
var box1 = document.getElementById("box1");

// 为整个文档页面移动鼠标设置响应函数
// 通过定义形参event获得onmousemove返回的对象
document.onmousemove = function (event) {
    // 考虑兼容问题
    event = event || window.event;

    // 获取滚动距离
    var sl = document.documentElement.scrollLeft;
    var st = document.documentElement.scrollTop;

    // 获取鼠标坐标
    var x = event.clientX;
    var y = event.clientY;

    // 设置box1移动样式
    box1.style.left = x + sl + "px";
    box1.style.top = y + st + "px";
}