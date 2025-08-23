
let first , second,third;
let ran = Math.random();
if (0<ran && ran<0.33){
    first = "Crazy";
}
else if(0.33<ran && ran<0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}
let ran1 = Math.random();
if (0<ran1 && ran1<0.33){
    second = "Engine";
}
else if(0.33<ran1&& ran1<0.66){
    second = "Foods";
}
else{
    second = "Garments";
}
let ran2 = Math.random();
if (0<ran2 && ran2<0.33){
    third = "Bros";
}
else if(0.33<ran2 && ran2<0.66){
    third = "Limited";
}
else{
    third = "Hub";
}
console.log(`${first} ${second} ${third}`);
