function boilWater(callback1) {
    setTimeout(() => {
        console.log("1. Water boiled");
        callback1();
    }, 2000);
}

function addTea(callback2) {
    setTimeout(() => {
        console.log("2. Tea leaves added");
        callback2();
    }, 2000);
}

function addSugar(callback3) {
    setTimeout(() => {
        console.log("3. Sugar added");
        callback3();
    }, 2000);
}

function addMilk(callback4) {
    setTimeout(() => {
        console.log("4. Milk added");
        callback4();
    }, 2000);
}

// the pyramid of doom
boilWater(() => {
    addTea(() => {
        addSugar(() => {
            addMilk(() => {
                console.log("✅ Tea is ready!");
            });
        });
    });
});
