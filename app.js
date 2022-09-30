const express = require('express')
const path = require('path')
const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')))
app.use('/', require(path.join(__dirname, 'routes/approutes.js')))

app.listen(port, (req, res)=>{
    console.log(`App is running at port http://localhost:${port}`)
})