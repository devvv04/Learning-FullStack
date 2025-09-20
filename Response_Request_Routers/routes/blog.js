const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello from blog")
})

router.get('/about',(req,res)=>{
    res.send("Hello from blog section in about section about")
})

module.exports = router
