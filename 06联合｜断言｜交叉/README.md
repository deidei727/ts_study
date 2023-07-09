# 联合类型
变量使用联合类型，res可以是string类型，也可以是number类型，除了这两个类型其他的都会报错
```
let res:string|number='123'
res=1234
console.log(res);
```
函数使用联合类型  
这个函数可以满足当我们接收的数字变成布尔值
```
const fuc=(type:number|boolean):boolean=>{
    return !!type
}
console.log(fuc(1));
```

# 交叉类型
是多种类型的集合，对象将具有全部成员，和继承类似
```
interface People{
    name:string
    age:number

}
interface Woman{
    sex:string
}

const lmdfunc=(girl:People&Woman):void=>{
    console.log(girl);
}

lmdfunc({name:'lmd',age:18,sex:'女'})
```

# 类型断言
```
interface A{
    run:string
}
interface B{
    build:number
}
let aaa=(x:A|B):void=>{
    // 此时会报错，因为B上并没有run属性
    // x.run

    // 方式一
    (x as A).run //使用断言来推断传入的是接口A

    // 方式二
    // (<A>x).run
}
console.log(aaa({build:24}));
```
```
function change(type:any):boolean{
    // 注意只有在any、unknown类型可以断言称boolean，但是如果明确规定类型会报错
    return (type as boolean)
}
console.log(change(1)); //打印的结果还是1，不会说因为你断言了，就让你的值变成boolean类型
```
**我们要注意，断言只是欺骗编译器，无法避免运行时的错误，在编译过程中会删除类型断言，不要滥用类型断言，否则会导致运行错误**



## any临时断言
**在any类型上访问任何属性都是允许的**  
window.abc=123   -->这种是错误的，因为window上没有abc这个属性，可以使用any断言  
(window as any).abc=123

## 对字面量的断言 :as const
- 如果是普通类型，和const定义常量是一样的
```
let name1='mengdie' as const
name1='diedei' //报错无法修改

const name2='mengdie'
name2='deidei' //报错无法修改
```
- 引用类型是不一样的
**在引用数据类型，我们使用const关键字定义常量，只要不修改地址就可，但是使用as const 是不能对数据进行修改**

```
const arr0=[1,3,4,5,6,7,8,9]
arr0.push(7) //正确

let arr10=[1,2,3,4,5,6,7,8] as const  //此时数据已经断言成[1,2,3,4,5,6,7,8]，他并不是一个数组，所以下面使用数组方法对时候会报错，说没有此属性
// arr10.push(7)
```