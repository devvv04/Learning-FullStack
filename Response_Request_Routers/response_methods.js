const express = require('express')
const p = require('path')
const blog = require('./routes/blog')
const app = express()
const port = 3000;

app.use('/blog',blog)

app.get('/methods',(req,res)=>{
res.send("hello")
})

app.get('/methods',(req,res)=>{
res.json({name : "dev", age : 23})
})

app.get('/methods',(req,res)=>{
res.end()
})

app.get('/methods',(req,res)=>{
res.sendFile(p.join(__dirname,'templates/index.html'))
})


app.get('/download', (req, res) => {
  res.download(p.join(__dirname, 'file.txt'), 'myfile.txt');
});

app.get('/redirect',(req,res)=>{
    res.redirect('/download')
})

app.get('/sendstatus', (req, res) => {
  res.sendStatus(402);  
});


app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
    
})