async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(34)
        }, 2000);
    })
}
(async function main() {
    let a = await sleep();
    console.log(a);

    let b = await sleep();
    console.log(b);
})()



