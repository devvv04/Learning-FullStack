async function getData() {
    return new Promise((resolve,reject)=>{
        console.log("i am loading")
    setTimeout(() => {
        resolve("i am successfully loaded")
    }, 3000);})
}

async function main() {
    console.log("performing async");
    console.log("Do something else");
    let data = await getData();
    console.log(data);
    console.log("process now");
    console.log("task2");
    
}

main()