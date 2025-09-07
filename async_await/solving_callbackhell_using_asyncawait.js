async function BoilWater() {
    return new Promise((resolve) => {
        console.log("Water is boiling...");
        setTimeout(() => {
            resolve("Water boiled");
        }, 2000);

    })
}
async function AddSugar() {
    return new Promise((resolve) => {
        console.log("Adding sugar...");
        setTimeout(() => {
            resolve("Sugar added");
        }, 2000);

    })
}
async function AddTea() {
    return new Promise((resolve) => {
        console.log("Adding tea...");
        setTimeout(() => {
            resolve("Tea added");
        }, 2000);

    })
}
async function AddMilk() {
    return new Promise((resolve) => {
        console.log("Adding milk...");
        setTimeout(() => {
            resolve("Milk added");
        }, 2000);

    })
}

async function main() {
    let water = await BoilWater();
    console.log(water);

    let sugar = await AddSugar();
    console.log(sugar);

    let tea = await AddTea();
    console.log(tea);

    let milk = await AddMilk();
    console.log(milk);

    console.log("Tea is ready");


}

main();