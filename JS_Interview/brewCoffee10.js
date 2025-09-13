// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


const random = () => {
    return Math.floor(Math.random() * 10 + 1)
}

async function brewCoffee(coffeeType) {

    return new Promise((resolve, reject) => {
        console.log(`OK! Brewing your ${coffeeType}`);
        let delay = random();
        setTimeout(() => {
            resolve(`Here, Your ${coffeeType} is ready in ${delay} seconds`)
        }, delay * 1000);
    })
}

async function main() {
    let order = await brewCoffee("caramel freppe")
    console.log(order);

}

main()