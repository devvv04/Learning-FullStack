console.log("promise chaining start");
//to solve callback hell
function boilWater(){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("1. Water boiled");
resolve();
    }, 2000);
})
}
function addTea(){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("2. Tea added");
resolve();
    }, 2000);
})
}
function addSugar(){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("3. Sugar added");
resolve();
    }, 2000);
})
}
function addMilk(){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("4. Milk added");
resolve();
    }, 2000);
})
}
boilWater().then(addTea).then(addSugar).then(addMilk).then(()=>{
console.log("Tea is ready");
}).catch((err)=>{
    console.log("Error: ",err);
    
})
