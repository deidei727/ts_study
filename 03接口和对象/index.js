let person = {
    name: 'lmd',
    sex: 'male',
    age: 18
};
let smallBaby = {
    baby: true,
    name: 'deidei',
    age: 0.2,
    sex: 'male',
};
console.log(smallBaby);
let student = {
    name: 'lmd',
    sex: 'male',
    hobby: ['play', 'dance', 'rappe'],
    tall: 170,
    study: () => {
        return '太好了';
    }
};
console.log(student);
const fun = (joke) => {
    console.log(joke);
    return {
        name: 'lmd',
        smile: false,
    };
};
console.log(fun('哈哈哈'));
