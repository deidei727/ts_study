// 普通函数
function func(a) {
    console.log(a);
    return 'nihoa';
}
console.log(func(999));
// 箭头函数
let add = (a, b) => {
    console.log(a, b);
    return a + b;
};
console.log(add(3, 4));
// 默认参数可选参数
// 注意可选参数和默认参数不能在一个变量上同时使用
function jian(a = 10, b) {
    return a - b;
}
console.log(jian(20));
function pathfunc(x) {
    console.log(x.path);
    return true;
}
console.log(pathfunc({ path: 'pathName', name: 'routeName' }));
let obj = {
    res: [1, 2, 3],
    username: 'lmd',
    password: 'word',
    add(num) {
        this.res.push(num);
        console.log(this.res);
        return num;
    }
};
console.log(obj.add(8));
// 通用的函数实现
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
    }
    else {
        throw new Error('Invalid arguments');
    }
}
console.log(sum(1, 2)); // 输出：3
console.log(sum('hello', 'world')); // 输出：'helloworld'
console.log(sum([1, 2], [3, 4])); // 输出：[1, 2, 3, 4]
// console.log(sum('hello', 123)); // 抛出错误：'Invalid arguments'
