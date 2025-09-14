const fs = require("fs")
console.log(fs);



fs.writeFileSync("dev.txt","dev is a good boy")

console.log("start");
fs.writeFileSync("dev2.txt", "dev 2 is also a good boy")
console.log("end");


// write file sync is asynchronous it does not accept  a callback,
console.log("start");
fs.writeFileSync("dev3.txt", "dev 3 is also3 a good boy",()=>{
    console.log("done dev3");
})
console.log("end");


// for using callback use : writefile
console.log("starting");

fs.writeFile("dev4.txt","dev4 is also a 4 good boy",()=>{
    console.log("done 4");
    
})

console.log("Ending");


// normal read:
fs.readFile("dev2.txt",(error,data)=>{
console.log(error,data.toString());
})

// append:

fs.appendFile(""," but a robo",(e)=>{
   if(e)
{
    console.log("error: ",e);
}
    else{
        console.log("append succesful");
        
    }
})