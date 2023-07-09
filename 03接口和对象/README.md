# 接口
在ts中，我们定义对象要使用interfac（接口），就是定义一种约束，**让数据结构来满足这个约束的格式**。  
- 在定义接口的时候，接口名要首字母大写。
- 在使用接口约束的时候，不能多一个属性，也不能少一个属性

## 重名接口合并
当接口重名的时候，会进行合并。意思是，当多个同名接口，如果里面属性有一样的，但是类型不一样,会报错：**后续属性声明必须属于同一类型。属性“name”的类型必须为“string”，但此处却为类型“number”**，如果没有的一样的属性会进行合并

```
interface Person{
    name:string
    sex:string
}
 interface Person{
    age:number
 }

let person:Person={
    name:'lmd',
    sex:'male',
    age:18
}
```
## 继承
```
interface Child extends Person{
    baby:boolean
}
let smallBaby:Child={
    baby:true,
    name:'deidei',
    age:0.2,
    sex:'male',
}
console.log(smallBaby)
```

## 可选、只读、添加任意属性、添加函数
```
interface Student{
    name:string
    sex:string
    age?:number //可选属性
    readonly hobby:object //只读属性

    // 一旦定义任意属性了，那么确定属性和可选属性的类型必须是它的类型的子集
    [addName:string]:any //添加任意属性（索引签名；key是string类型的，value是any类型）
    study:()=>string
}

let student:Student={
    name:'lmd',
    sex:'male',
    hobby:['play','dance','rappe'],
    tall:170,
    study:()=>{
        return '太好了'
    }
}
console.log(student);
```

## 定义函数类型
```
interface Fn{
    //传入的参数及类型  返回值类型
    (joke:string):object
}
const fun:Fn=(joke:string)=>{
   console.log(joke);
    return {
        name:'lmd',
        smile:false,
    }
}
console.log(fun('哈哈哈'))
```