const fs = require("fs")

//normal :
// console.log("start");
// fs.writeFile("abc3.txt","i a trying something",()=>{
//     console.log("done abc");
//     fs.readFile("abc2.txt",(e,d)=>{
//         console.log(d.toString());
//     })
// })
// console.log("end");

//callback hell:

fs.writeFile("file1.txt", "data1", () => {
    console.log("file1 written");

    fs.readFile("file1.txt", (err, data1) => {
        console.log("file1 read");

        fs.writeFile("file2.txt", data1 + " more", () => {
            console.log("file2 written");

            fs.readFile("file2.txt", (err, data2) => {
                console.log("file2 read");

                fs.writeFile("file3.txt", data2 + " even more", () => {
                    console.log("file3 written");
                    // and it keeps going...
                });
            });
        });
    });
});
