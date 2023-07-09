// 普通函数
function func(a:number): string{
    console.log(a);
    
        return 'nihoa'
}
console.log(func(999));

// 箭头函数

let add=(a:number,b:number):number=>{
    console.log(a,b);
    return a+b;
}
console.log(add(3,4));


// 默认参数可选参数
// 注意可选参数和默认参数不能在一个变量上同时使用
function jian(a:number=10,b?:number):number{
    return  a-b
}
console.log(jian(20));


// 参数是对象
interface Path{
    path: string
    name: string
}
 
function pathfunc(x:Path):boolean{
    console.log(x.path);
    
    return true
}
console.log(pathfunc({path: 'pathName', name: 'routeName'}))

// 函数this类型
interface Obj{
    res:number[]
    username:string
    password:string
    add:(this:Obj,num:number)=>number
}
let obj:Obj={
    res:[1,2,3],
    username:'lmd',
    password:'word',
    add(this:Obj,num:number){
        this.res.push(num)
        console.log(this.res);
        
        return num
    }
}
console.log(obj.add(8));

// 函数重载
// 我们可以看到我只定义通用函数就可以实现想要的功能，但是为什么还要使用函数重载呢
// 虽然可以实现，但是在函数内部充斥着大量的类型判断。
// 使用函数重载可以避免这些问题，因为它可以让我们将不同类型的参数和不同的实现分别定义在不同的函数重载中
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: any[], b: any[]): any[];

// 通用的函数实现
function sum(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a+b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a+b;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  } else {
    throw new Error('Invalid arguments');
  }
}

console.log(sum(1, 2)); // 输出：3
console.log(sum('hello', 'world')); // 输出：'helloworld'
console.log(sum([1, 2], [3, 4])); // 输出：[1, 2, 3, 4]
// console.log(sum('hello', 123)); // 抛出错误：'Invalid arguments'