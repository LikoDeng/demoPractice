// 获取img元素节点
var img = document.getElementsByTagName("img")[0];

// 获取按钮元素节点
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

// 将照片src存入数组中，便于操作
var imgArray = ["1.png", "2.png", "3.png", "4.png", "5.png"];

// 初始化索引值
var index = 0;

// 初始化定时器编号
var timer;

// 为btn1绑定鼠标点击，照片开始轮播响应函数
btn1.onclick = function () {
    // 取消上一个定时器,防止一直增加定时器
    clearInterval(timer);
    timer = setInterval(function () {
        index++;
        // 实现照片轮播效果
        index %= imgArray.length;
        img.src = imgArray[index];
    }, 1000)
}

// 为btn2绑定鼠标点击，停止播放照片的响应函数
btn2.onclick = function () {
    clearInterval(timer);
}