class animal {
    constructor(name){
        this.name = name 
        console.log("Object is created..");
    }
    eats(){
        console.log("Kha raha hoon");
        
    }
    jumps(){
        console.log("kood raha hoon");
        
    }
}

let rabbit = new animal("Bunny");
console.log(rabbit);

class lion extends animal{
// constructor(name){
//     super(name)
//     console.log("Lion specific object is created");
// }
    eats(){
        console.log("Lion kha raha hai");
        
    }

}

let l = new lion("Shera");
console.log(l);

console.log(l instanceof lion);
