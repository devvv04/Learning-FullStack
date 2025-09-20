const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const blog = require('./routes/blog.js')

// app.use(express.static('public')) //default


app.use('/blog', blog)
//middleware 1
app.use((req,res,next)=>{
    fs.appendFileSync('try.txt',`${new Date().toLocaleString()} is a ${req.method} \n`)
    console.log(req.headers);
    
    //`${new Date().toString()} is a ${req.method} \n`
    console.log("m1");
    // res.send("abc") will not work
    next()
})

//middleware 2
app.use((req,res,next)=>{
    console.log("m2");
    next()
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})



app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
    
})