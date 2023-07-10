abstract class Vue{
    name:string;
    constructor(name?:string){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    abstract init(name:string):void;
}

// React是派生类,派生类实现抽象方法
class React extends Vue{
    constructor() {
        super()
    }
    init(name: string): void {
        console.log('init');
    }
    setName(name:string){
        this.name = name;
    }
}
let react=new React();
react.setName('mengdie')
console.log(react.getName());
