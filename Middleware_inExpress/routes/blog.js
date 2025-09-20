const express = require('express')
const router = express.Router()
const fs = require('fs')

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  fs.appendFileSync(`blog_log.txt`,`${new Date().toLocaleString()} is a ${req.method}/n`)
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router
