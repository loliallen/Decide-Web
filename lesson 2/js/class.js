const a = {
    a: 123
}

class Human {
    constructor(name){
        this.name = name;
        this.age = 0;
    }

    birthday(){
        this.age++;
    }
}

const oleg = new Human("Олег")
console.log(oleg)
oleg.birthday()
console.log(oleg)

oleg.birthday()
console.log(oleg)