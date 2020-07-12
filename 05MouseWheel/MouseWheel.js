// 获取box1元素节点
var box1 = document.getElementById("box1");

// 定义一个bind函数，绑定事件
function bind(obj, eventStr, callback) {
    // 为大部分主流浏览器绑定
    if (obj.addEventListener) {
        obj.addEventListener(eventStr, callback, false);
    } else {
        // 为IE8及以下浏览器绑定
        obj.attachEvent("on" + eventStr, function () {
            callback.call(obj);
        })
    }
}

// 为box1绑定鼠标滑动、盒子滚动响应函数
box1.onmousewheel = function (event) {
    // 浏览器兼容问题
    event = event || window.event;

    // 判断滚动方向,若向上便减少盒子高度，相反增加
    if (event.wheelDelta > 0 || event.detail < 0) {
        box1.style.height = box1.clientHeight - 10 + "px";
    } else {
        box1.style.height = box1.clientHeight + 10 + "px";
    }

    // 若页面很长，有滚动条，浏览器会有默认行为影响盒子滚动
    //火狐浏览器清除浏览器默认行为方法 
    event.preventDefault && event.preventDefault();

    // 其它浏览器修改默认方法
    return false;
}

// 若访问浏览器为火狐浏览器，调用绑定函数
bind(box1, "DOMMouseScroll", box1.onmousewheel);