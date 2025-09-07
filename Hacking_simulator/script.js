console.log("challenge 14");


function radnom(){
let a = (Math.floor(Math.random() * 7) + 1)*1000;
return a;
}

async function init() {
    return new Promise((resolve)=>{
        setTimeout(() => {
             resolve("Initializing Hacking...")
        }, radnom() );
    })
}
async function read() {
    return new Promise((resolve)=>{
        setTimeout(() => {
             resolve("Reading your Files...")
        }, radnom() );
    })
}
async function pass() {
    return new Promise((resolve)=>{
        setTimeout(() => {
             resolve("Password Files Detected...")
        }, radnom() );
    })
}
async function server() {
    return new Promise((resolve)=>{
        setTimeout(() => {
             resolve("Sending all password and personal files to server...")
        }, radnom() );
    })
}
async function clean() {
    return new Promise((resolve)=>{
        setTimeout(() => {
             resolve("Cleaning up...")
        }, radnom() );
    })
}

async function main() {
    console.log(await init());
    console.log(await read());
    console.log(await pass());
    console.log(await server());
    console.log(await clean());
}

//  alert(await init());
//     alert(await read());
//     alert(await pass());
//     alert(await server());
//     alert(await clean());

main();