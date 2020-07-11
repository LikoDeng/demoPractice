// 获取按钮元素节点
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// 获取img节点，因为用tagname获取的为collection集合,因此要取出第一个元素，将它变为元素节点
var img = document.getElementsByTagName("img")[0];

// 将img里的src存入一个数组中
var imgArray = ["1.png", "2.png", "3.png", "4.png", "5.png"];

// 初始化索引
var index = 0;

// 获取p标签节点
var text = document.getElementById("text");

// 为p标签内容添加文本，提高用户体验
// 第几张的index+1得括起来，不然会以为是字符串拼串
text.innerHTML = "一共有" + imgArray.length + "张，当前是第" + (index + 1) + "张";
// 为prev按钮绑定响应函数
prev.onclick = function () {
    index--;
    for (i = 0; i < imgArray.length; i++) {
        // 控制index范围，防止溢出
        if (index < 0) {
            index = imgArray.length - 1;
        }
        img.src = imgArray[index];
        text.innerHTML = "一共有" + imgArray.length + "张，当前是第" + (index + 1) + "张";
    }
}

// 为next按钮绑定响应函数
next.onclick = function () {
    index++;
    for (i = 0; i < imgArray.length; i++) {
        // 控制index范围，防止溢出
        if (index > imgArray.length - 1) {
            index = 0;
        }
        img.src = imgArray[index];
        text.innerHTML = "一共有" + imgArray.length + "张，当前是第" + (index + 1) + "张";
    }
}

