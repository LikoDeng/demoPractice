// 获取box1元素节点
var box1 = document.getElementById("box1");

// 为整个document文档绑定键盘按下的响应函数
document.onkeydown = function (event) {
    // 考虑浏览器兼容问题
    event = event || window.event;

    // 定义一个变量存放要移动的距离
    var index = 15;

    // 当按下ctrl键，可以加速移动
    if (event.ctrlKey) {
        index += 10;
    }

    // 键盘向左code码为37，上为38，右为39，下为40
    switch (event.keyCode) {
        case 37:
            box1.style.left = box1.offsetLeft - index + "px";
            break;
        case 38:
            box1.style.top = box1.offsetTop - index + "px";
            break;
        case 39:
            box1.style.left = box1.offsetLeft + index + "px";
            break;
        case 40:
            box1.style.top = box1.offsetTop + index + "px";
            break;
    }
}