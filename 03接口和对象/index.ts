// 重名接口合并
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

// 继承
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

// 可选、只读、添加任意属性、添加函数
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

//定义函数类型
interface Fn{
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