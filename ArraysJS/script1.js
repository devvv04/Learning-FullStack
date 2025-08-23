console.log("Loops in array");
a = [3,5,87,35,95,24]

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}
a.forEach(element => {
    console.log(element)
});
a.forEach((v,i,a) => {
    console.log(`value : ${v}, Index : ${i}, Array : ${a}`)
    // a.shift();
});

for (const value of a) {
    console.log(value)
}
