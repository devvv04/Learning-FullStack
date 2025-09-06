console.log("I am performing promises");

let prom1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       console.log("i am done");
       resolve("promise succesful") ;
    }, 3000);
})
// console.log(prom1);
prom1.then((a) => {
    console.log(a);
    
})
prom1.then(()=>{
    setTimeout(() => {
    console.log("promise 2 successfull")
}, 2000);
});

//2.error:
console.log("I a performing promise")

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a>0.5){
        reject("No random number is not allowing");
    }
    else{
        resolve("i am done")
    }
})
prom2.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err);
})