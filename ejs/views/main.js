const express = require('express');
const app = express()
const port = 3000;

app.set('view engine','ejs')

app.get('/',(req,res)=>{

const company = "DevVerma";
const search = "Search Now";    
    res.render("index",{company , search})
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
    
})