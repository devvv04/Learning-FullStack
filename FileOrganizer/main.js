import fs from "fs/promises"
import path from "path"
// console.log(fs);
async function organize() {
    let files = await fs.readdir("C:\\Users\\Dell\\Desktop\\sigma web dev\\video91 challenge 15");
// console.log(files);
for (const file of files) {
    // console.log(file);
    const ext = path.extname(file).toLowerCase();
    // console.log(ext);
    if(!ext) continue;
    const foldername = ext.slice(1)
    const folderdest = path.join("C:\\Users\\Dell\\Desktop\\sigma web dev\\video91 challenge 15" , foldername)

    // await fs.mkdir(folderdest);
     await fs.mkdir(folderdest, { recursive: true });
    console.log(`created folder: ${folderdest}`);
    
const oldpath = path.join("C:\\Users\\Dell\\Desktop\\sigma web dev\\video91 challenge 15",file)
const newpath = path.join(folderdest,file)

await fs.rename(oldpath,newpath)
console.log(`moved ${file} to ${foldername}`);
}
}

organize();

