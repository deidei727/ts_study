# 类
## 类的基本用法
### 继承 
### implements（实现接口）
## 修饰符
### readonly 
给属性使用，表示属性是只读的

### private protected public
可以给**属性和方法**使用
- private   
只能在自己内部进行使用，子类不能调用父类中的使用private定义的属性高或者方法，创建的实例对象也无法进行调用
- protected   
给子类和内部进行使用过，创建的实例对象还是无法进行调用
- public   
任何地方都可以使用，子类，外部都可以使用

## super 原理
在子类中使用super()方法，本质上是调用 父类的prototype.constructor.call 将this指向父类，所以在子类中，可以通过super.语法获取父类属性和方法

## 静态方法 static
不仅可以定义方法还可以定义属性。**构造函数可以直接调用静态方法。****在静态方法内部只能调用静态属性或方法**(因为static属性方法加载在其他属性之前，static初始化的时候别的属性还不存在，所以调用不了，只能调用静态的)
```
Promise.all() //这里的all（）方法就是静态方法，Promise构造函数可以直接调用
```

```
 static x='1234'
 static version(): string {
    this.x
    return '1.0.0 '
 }
```
## get set
```
class Ref{
  _value:any
  constructor(value:any){
      this._value=value
  }
  get value(){
    return this._value+'后缀'
  }
  set value(newValue:any){
     this._value=newValue
  }
}
let ref=new Ref('梦蝶')
ref.value='deidei'
console.log(ref.value);

```
