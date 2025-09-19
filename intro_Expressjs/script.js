const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.static('script.js'))

app.get('/', (req, res) => {
    res.send("<h1>Hello World2</h1>")
})

app.get('/Home', (req, res) => {
    res.send("<h1>Hello Home</h1>")
})

app.get('/About', (req, res) => {
    res.send("<h1>Hello About</h1>")
})

app.get('/Blog', (req, res) => {
    res.send("<h1>Hello Blog</h1>")
})

// app.get('/Blog/FirstBlog',(req,res)=>{
//     res.send("<h1>Hello First Blog</h1>")
// })

// app.get('/Blog/SecondBlog',(req,res)=>{
//     res.send("<h1>Hello Second Blog</h1>")
// })

//to fix writing this again and again: express js like:

// app.get('/Blog/:slug',(req,res)=>{
//     res.send(`hello ${req.params.slug} `)
// })


app.get('/Blog/:slug/:seconds', (req, res) => {
    res.send(`hello ${req.params.slug} and also to ${req.params.seconds}`)
})

//for url : http://localhost:3000/blog/abc?mode=dark&region=in
app.get('/Blog/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);

    // res.send(`hello ${req.params.slug} `)
    res.send(`hello ${req.params.slug} and mode is ${req.query.mode} and region is ${req.query.region}`)


})

app.listen(port, () => {
    // console.log("eg app listening on port" +port+"");
    console.log(`Server running at http://localhost:${port}`);
})