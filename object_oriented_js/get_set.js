class Person{
    constructor(name)
    {
        console.log("person is created");
        this.name = name
    }
    get name(){
        console.log("Getter is called");
        return this._name;
    }
    set name(new_name){
        console.log("Setter is called");
        this._name = new_name
    }
}
let p = new Person("Dev");
console.log(p.name);
p.name = "alex"
console.log(p.name);

