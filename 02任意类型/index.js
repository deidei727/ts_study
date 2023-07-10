// any是任意类型，没有强制限定是那种类型，并且可以对any进行操作，不用检查数据类型
let lmd = 'lmd';
lmd = 123;
lmd = false;
lmd = { key: 'good' };
console.log(lmd);
// unknown 和any 一样，所有类型都可分配给unkown，但是unknown会比any稍微严格一些
let deidei = '123';
deidei = 123;
deidei = null;
deidei = undefined;
deidei = [undefined, undefined, undefined, undefined];
deidei = Symbol('type');
deidei = { key: 'nice' };
console.log(deidei);
// 当一个对象赋值给unknown类型的时候，无法调用里面的属性.会报错：类型“unknown”上不存在属性“key”
// console.log(deidei.key);
// 但是在any上就不会报错，他可以进行调用，只不过没有提示而已
console.log(lmd.key);
// unknown类型不能作为子类型，只能作为父类型，但是any可以作为父类型和子类型
// 这种写法就会报错：不能将类型“unknown”分配给类型“string”。
// let names:unknown='unknown'
let names2 = 'names';
// names2=names
let names3 = 'any';
names2 = names3;
console.log(names2);
