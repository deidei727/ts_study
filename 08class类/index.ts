// interface Options {
//   el: string | HTMLElement;
// }

// interface Vuecls {
//   options: Options;
//   init: () => void;
// }

// // 定义虚拟dom节点类型
// interface Vnode {
//   tag: string; //标签名
//   text?: string; //内容
//   children?: Vnode[]; //子节点
// }
// // 定义一个类，实现创建元素，将元素里面的内容添加进来，渲染函数
// class Dom {
//   // 创建元素
//  protected createElement(tag: string) {
//     return document.createElement(tag);
//   }

//   // 添加内容
//   protected setText(root: HTMLElement, text: string) {
//     root.textContent = text;
//   }
//   // 渲染函数
//   protected render(date: Vnode) {
//     let root = this.createElement(date.tag);
//     if (date.children && date.children.length != 0) {
//         date.children.forEach(child => {
//         let childNode=this.render(child);
//         root.appendChild(childNode);
//       });
//     } else {
//       this.setText(root, date.text);
//     }
//     return root;
//   }
// }

// // 在TypeScript是不允许直接在constructor 定义变量的 需要在constructor上面先声明
// class Vue extends Dom implements Vuecls {
//   options: Options;
//   // 构造函数：创建和初始化类的对象和方法
//   constructor(options: Options) {
//     super();
//     this.options = options;
//     this.init();
//   }

//   // 静态方法和属性定义
//   static x='1234'
//   static version(): string {
//     this.x
//     return '1.0.0 '
//   }
//   init(): void {
//     // 虚拟dom 就是通过js 去渲染我们的真实dom
//     // 定义数据
//     let date: Vnode = {
//       tag: "div",
//       text: "你好",
//       children: [
//         {
//           tag: "h1",
//           text: "我是子节点标题1",
//         },
//         {
//           tag: "h2",
//           text: "我是子节点标题2",
//         },
//       ],
//     };
//     // 将数据渲染到页面
//     // 1.获取页面的跟节点
//     let app=typeof this.options.el =='string' ? document.querySelector(this.options.el):this.options.el

//     // 2.向跟节点中插入渲染的dom数据
//     app.appendChild(this.render(date))
    
//   }
// }
// let vue=new Vue({
//   el: "#app",
// });

// //类可以直接调用静态方法和属性 
// Vue.version();



class Ref{
  _value:any
  constructor(value:any){
      this._value=value
  }
  get value(){
    return this._value+'后缀'
  }
  set value(newValue:any){
     this._value=newValue
  }
}
let ref=new Ref('梦蝶')
// 会对应上set函数
ref.value='deidei'

// 会对应上get函数
console.log(ref.value);
