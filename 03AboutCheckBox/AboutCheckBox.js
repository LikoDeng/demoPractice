// 获取四个按钮元素节点
var checkAllBtn = document.getElementById("checkAllBtn");
var checkNoBtn = document.getElementById("checkNoBtn");
var checkRevBtn = document.getElementById("checkRevBtn");
var sendBtn = document.getElementById("sendBtn");

// 获取选择框元素节点
var checkAllBox = document.getElementById("checkAllBox");
var items = document.getElementsByName("items");

// 为全选按钮绑定响应函数，实现所有选择框选中
checkAllBtn.onclick = function () {
    for (i = 0; i < items.length; i++) {
        items[i].checked = true;
    }
    checkAllBox.checked = true;
}

// 为全不选按钮绑定响应函数，实现所有选择框都不选中
checkNoBtn.onclick = function () {
    for (i = 0; i < items.length; i++) {
        items[i].checked = false;
    }
    checkAllBox.checked = false;
}

// 为反选按钮绑定响应函数，实现所有选中框取消选中，没选中的选择框选中功能
// 并且第二行爱好选择框与第一行全选框状态绑定
checkRevBtn.onclick = function () {
    // 初始化checkAllBox的状态为true，不然checkAllBox一直没选中状态
    checkAllBox.checked = true;
    for (i = 0; i < items.length; i++) {
        items[i].checked = !items[i].checked;
        if (!items[i].checked) {
            checkAllBox.checked = false;
        }
    }
}

// 为全选选择框绑定与第二行选择框状态一致的响应函数
checkAllBox.onclick = function () {
    for (i = 0; i < items.length; i++) {
        items[i].checked = this.checked;
    }
}

// 为第二行爱好选择框与第一行全选框状态绑定
for (i = 0; i < items.length; i++) {
    // 初始化checkAllBox的状态为true
    items[i].onclick = function () {
        checkAllBox.checked = true;
        for (j = 0; j < items.length; j++) {
            if (!items[j].checked) {
                checkAllBox.checked = false;
            }
        }
    }
}
// 为提交按钮绑定响应函数，实现将选中的爱好选择框属性弹出功能
sendBtn.onclick = function () {
    for (i = 0; i < items.length; i++) {
        if (items[i].checked) {
            alert(items[i].value);
        }
    }
}