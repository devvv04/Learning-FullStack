// application level middlewre
// router level middlewre

const express = require('express')
const app = express()
const port = 

//error middleware: app.use((err, req, res, next) => {
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.get('/',(req,res)=>{

})

app.listen(port,()=>{
    console.log(`running at http://localhost${port}`);
    
})

//third party middleware : 

// const express = require('express')
const apj = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
apj.use(cookieParser())
