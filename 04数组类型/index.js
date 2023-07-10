// 一维数组
// 使用普通类型定义数组
let arr = [1, 1, 2, 2];
let arr1 = ['a', 'b', 'c', 'd', 'e'];
// 使用泛型定义数组
let arr2 = [1, 1, 2, 2];
let arr3 = ['a', 'b', 'c', 'd'];
console.log(arr2);
let arr4 = [{ a1: 1, a2: 'nihao' }, { a1: 2, a2: 'zaijian' }, { a1: 3, a2: 'hhhh' }];
console.log(arr4);
let arr5 = [{ a1: 1, a2: 'nihao' }, { a1: 2, a2: 'zaijian' }];
console.log(arr5);
// 任意类型的数组 一个数组中不仅有数字，字符串，对象等等，可以使用any[]、Array<any>进行定义
let arr6 = [1, 'ni', { name: 'deidei', age: 12 }];
let arr7 = [1, 'ni', { name: 'deidei', age: 12 }];
console.log(arr7);
// 多维数组
let arr8 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arr9 = [[3, 2, 1], [4, 5, 6], [7, 8, 9]];
// 类数组
function fnc(...args) {
    console.log(arguments);
    // arguments是伪数组的形式，身上没有数组的那些方法，所以在我们定义的时候不能像定义数组的方法一样定义伪数组
    let a = arguments;
    // IArguments是ts定义好的类型，是ts内置对象
}
fnc(1, 3, 4);
