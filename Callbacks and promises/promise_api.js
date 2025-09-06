console.log("I am performing promise APIs")

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a>0.5){
        reject("No random number is not allowing 1");
    }
    else{
        resolve("i am done 1")
    }
})
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a>0.5){
        reject("No random number is not allowing 2");
    }
    else{
        resolve("i am done 2")
    }
})

let p3 = Promise.all([prom1,prom2])
p3.then((a)=>{
console.log(a)
}).catch((err)=>{
    console.log(err);
})

let p4 = Promise.allSettled([prom1,prom2])
p4.then((a)=>{
console.log(a)
}).catch((err)=>{
    console.log(err);
})

let p5 = Promise.race([prom1,prom2])
p5.then((a)=>{
console.log(a)
}).catch((err)=>{
    console.log(err);
})

let p6 = Promise.any([prom1,prom2])
p6.then((a)=>{
console.log(a)
}).catch((err)=>{
    console.log(err);
})

let p7 = Promise.resolve(42)
p7.then((a) => {
    console.log(a);
})

let p8 = Promise.reject("Something went wrong")
p8.then((err)=>{
    console.log(err);
})




