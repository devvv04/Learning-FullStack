const path = require("path");
// console.log(path);

let myPath = "C:\\Users\\Dell\\Desktop\\sigma web dev\\video87\\abc.txt"
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.parse(myPath));

console.log(path.join("folder","subfolder","file.txt"));
