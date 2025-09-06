// 1:
// asynchronous nature of js :-
console.log('Harry is a hacker');
console.log('rohan is a hecker');
setTimeout(() => {
    console.log('Dev');
    
}, 3000);
setTimeout(() => {
    console.log('Dev 2');
    
}, 2000);
console.log('The end');


// 2:
const callback = (arg)=>{
    console.log(arg);
    
}

const loadscript = (src, callback) =>{
let sc = document.createElement("script")
sc.src = src;
sc.onload = () => callback("Harry");
document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/axios.min.js", callback);


// 3:
// BY creating abc function in callback function
const loadscript1 = (src, callback) =>{
let sc = document.createElement("script")
sc.src = src;
sc.onload = () => callback(abc);
document.head.append(sc);
}

loadscript1("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js", abc = ()=>{
    console.log("Loaded");
});


