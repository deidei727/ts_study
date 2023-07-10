// ecma
// eg:Number、String、Boolean、RegExp、Date、Error
// 定义内置对象：什么构造函数就是什么类型
let num = new Number(true);
console.log(num);
let str1 = new String('deidei');
console.log(str1);
let bool0 = new Boolean(0);
console.log(bool0);
let reg = new RegExp(/[0-9]/);
console.log(reg);
let date = new Date();
console.log(date);
// let err:Error=new Error('error!')
// console.log(err);
// DOM
// Document、HTMLElement、Event、NodeList
// HTML（元素）Element、HTMLElement、NodeList、NodeListof
// let body: HTMLElement = document.body;
// let box:HTMLDivElement=document.querySelector('div')
// let egg:NodeListOf<HTMLDivElement|HTMLElement>=document.querySelectorAll('div footer')
// NodeListOf是一个数组，可以进行遍历
// BOM  (浏览器对象)
// let local:Storage=localStorage
// let lo:Location=location
// // 注意cookie返回的是字符串
// let cookie:string=document.cookie
// promise<>中放的是返回值类型
let promise = new Promise((resolve, reject) => resolve('name'));
promise.then((result) => {
    console.log(result);
});
