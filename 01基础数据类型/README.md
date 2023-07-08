# 基本数据类型
在js中，基本数据类型包括：number，string，undefined，null，boolean，以及es6的symbol和es11的bigInt。这些数据类型在ts中也都包括。

## 字符串类型
**使用string定义的**

### 普通声明
```
let a:string = "我是字符串变量a"
```

### 使用es6的模版字符串语法
```
let str:string = `我是模版字符串语法，${a}`
```

## 数字类型

**使用number定义的，支持二进制，八进制，十进制，十六进制**

```
let notNumber:number =NaN  //不是数字
let infinityNumber:number =Infinity //无穷大
let dec:number =6  //十进制
let hex:number =0xf00d //十六进制
let octal:number=0o744 //八进制
let binary:number=0b1010 //二进制
```

## 布尔类型
```
let boo:boolean =false //可以直接使用布尔值
let bool2:boolean =Boolean(1) //也可以使用函数的返回值
```

**注意**:使用构造函数Boolean创造的对象不是布尔值，new Boolean()返回的是一个Boolean对象
```
let boolean2:boolean =new Boolean(1)//将其改成如下样子是正确的
```
这样创建，会报如下错误：
```Type 'Boolean' is not assignable to type 'boolean'.
 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
 ```

**正确做法：**
```
let boolean2:Boolean=new Boolean(1)
```


## 空值类型
在js中并没有空值（void）的概念，在ts中，通过使用void表示函数没有返回值。return后面不接任何返回值或者不写 return均可  
都会用在函数上，不会去定义变量的时候使用void
```
function fn():void{
    console.log('nihao');
    return
}
fn();
```

**void也可以定义undefined和null类型，** 但是将**null**赋值给void的前提是要**关闭ts的严格模式**
否则会报如下错误： Type 'null' is not assignable to type 'void'

```
// let nv:void = null;
let uv:void = undefined;
console.log(uv)
```

## Null和undefined类型
```
let n:null = null;  
let u:undefined = undefined;
```



## 区别：null undefined void
 null undefined是所有类型的子类型，也就是说，可以将null undefined赋值给其他类型,**前提条件是关闭严格模式，否则会报错**
 ```
let x1:null = null;  
let x2:undefined = undefined;
let str2:string = 'lmd'
str2=x1
console.log(str2) // null
```
