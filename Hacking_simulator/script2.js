console.log("challenge 14");

function radnom() {
    return (Math.floor(Math.random() * 7) + 1) * 1000;
}

function dot(message, delay, resolve) {
    let dots = "";
    let interval = setInterval(() => {
        dots = dots.length < 3 ? dots + "." : "";
        console.log(message + dots);
    }, 500);

    setTimeout(() => {
        clearInterval(interval);
        console.log(message + " ✅");
        resolve(message);
    }, delay);
}


async function init() {
    return new Promise((resolve) => {
        dot("Initializing Hacking", radnom(), resolve);
    });
}
async function read() {
    return new Promise((resolve) => {
        dot("Reading your Files", radnom(), resolve);
    });
}
async function pass() {
    return new Promise((resolve) => {
        dot("Password Files Detected", radnom(), resolve);
    });
}
async function server() {
    return new Promise((resolve) => {
        dot("Sending all password and personal files to server", radnom(), resolve);
    });
}
async function clean() {
    return new Promise((resolve) => {
        dot("Cleaning up", radnom(), resolve);
    });
}

async function main() {
    console.log(await init());
    console.log(await read());
    console.log(await pass());
    console.log(await server());
    console.log(await clean());
}

main();
