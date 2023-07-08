# 安装调试的库
安装下面两个库，可以在node环境下执行ts文件，只需要执行ts-node < 文件名>即可，不用通过生成js文件，再去执行js文件的方式进行执行ts文件了
- npm i ts-node -g
- npm i @types/node -D

# 类型的顺序（包含类型的多少）
1. top type 顶级类型：any、unknown （就是any和unknow包含所有类型，eg：字符串，数字，布尔等等）
2. Object
3.  Number String Boolean（构造函数）
4.  number string boolean（构造函数的实例化对象）
5.  123   'lmd'   true 

# 任意类型

## any类型
any是任意类型，没有强制限定是哪种类型，并且可以对any进行操作，不用检查数据类型
```
let lmd:any='lmd';
lmd=123
lmd=false
lmd={key:'good'}
console.log(lmd);
```

## unknown类型
unknown 和any 一样，所有类型都可分配给unkown，但是unknown会比any稍微严格一些
```
//一下都是正确的
let deidei:unknown='123'
deidei=123
deidei=null
deidei=undefined
deidei=[undefined,undefined,undefined,undefined]
deidei=Symbol('type')
deidei={key:'nice'}
console.log(deidei);
```

## 二者区别
1. 当一个对象定义是unknown类型时，无法调用里面的属性，会报错：**类型“unknown”上不存在属性“key”**
```
let deidei:unknown='123'
deidei={key:'nice'}
console.log(deidei.key); //会报错
```

但是在any上就不会报错，他可以进行调用，只不过没有提示而已
```
let lmd:any='lmd';
lmd={key:'good'}
console.log(lmd.key);
```

2. unknown类型不能作为子类型，只能作为父类型，但是any可以作为父类型和子类型  
这种写法就会报错：不能将类型“unknown”分配给类型“string”。
```
//报错
let names:unknown='unknown'
let names2:string='names'
names2=names
```

```
//不会报错
let names2:string='names'
let names3:any='any'
names2=names3
console.log(names2);
```