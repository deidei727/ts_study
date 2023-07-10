// 定义一个类，实现创建元素，将元素里面的内容添加进来，渲染函数
class Dom {
    // 创建元素
    createElement(tag) {
        return document.createElement(tag);
    }
    // 添加内容
    setText(root, text) {
        root.textContent = text;
    }
    // 渲染函数
    render(date) {
        let root = this.createElement(date.tag);
        if (date.children && date.children.length != 0) {
            date.children.forEach(child => {
                let childNode = this.render(child);
                root.appendChild(childNode);
            });
        }
        else {
            this.setText(root, date.text);
        }
        return root;
    }
}
// 在TypeScript是不允许直接在constructor 定义变量的 需要在constructor上面先声明
class Vue extends Dom {
    // 构造函数：创建和初始化类的对象和方法
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        // 虚拟dom 就是通过js 去渲染我们的真实dom
        // 定义数据
        let date = {
            tag: "div",
            text: "你好",
            children: [
                {
                    tag: "h1",
                    text: "我是子节点标题1",
                },
                {
                    tag: "h2",
                    text: "我是子节点标题2",
                },
            ],
        };
        // 将数据渲染到页面
        // 1.获取页面的跟节点
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        // 2.向跟节点中插入渲染的dom数据
        app.appendChild(this.render(date));
    }
}
new Vue({
    el: "#app",
});
