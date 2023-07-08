// 字符串类型：使用string定义的
// 普通声明
let a = "我是字符串变量a";
// 使用es6的模版字符串语法
let str = `我是模版字符串语法，${a}`;
// 数字类型：使用number定义的，支持二进制，八进制，十进制，十六进制
let notNumber = NaN; //不是数字
let infinityNumber = Infinity; //无穷大
let dec = 6; //十进制
let hex = 0xf00d; //十六进制
let octal = 0o744; //八进制
let binary = 0b1010; //二进制
// 布尔类型
let boo = false; //可以直接使用布尔值
let bool2 = Boolean(1); //也可以使用函数的返回值
// 注意：使用构造函数Boolean创造的对象不是布尔值，new Boolean()返回的是一个Boolean对象
// 这样创建，会报如下错误：Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
//  let boolean2:boolean =new Boolean(1)//将其改成如下样子是正确的
let boolean2 = new Boolean(1);
// 空值类型
// 在js中并没有空值（void）的概念，在ts中，通过使用void表示函数没有返回值。return后面不接任何返回值或者不写 return均可
// 都会用在函数上，不会去定义变量的时候使用void
function fn() {
    console.log('nihao');
    return;
}
fn();
// void也可以定义undefined和null类型，但是将null赋值给void的前提是要关闭ts的严格模式
// 否则会报如下错误： Type 'null' is not assignable to type 'void'.
// let nv:void = null;
let uv = undefined;
console.log(uv);
// null和undefined类型
let n = null;
let u = undefined;
// 区别：null undefined void
// null undefined是所有类型的子类型，也就是说，可以将null undefined赋值给其他类型,前提条件是关闭严格模式，否则会报错
let x1 = null;
let x2 = undefined;
let str2 = 'lmd';
str2 = x1;
console.log(str2);
