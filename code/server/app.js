const express = require('express')
const app = express()

const formidable = require("formidable")

app.use(express.static('./public'))

// app.get('/',(req, res)=>{
//     console.log(1)
//     res.end('success')
// })

// app.get('/a',(req, res)=>{
//     console.log(1)
//     res.end('success')
// })

// app.get('/fetch_test', (req, res) => {
//     console.log(req.body)
//     res.end('fetch')
// })

// app.post('/jqpost', (req, res) => {
//     console.log('---')
//     console.log(new Date())
//     console.log(req.body)
//     res.end('jqpost')
// })

app.post('/fetch_test', (req, res) => {
    var form = new formidable.IncomingForm()
　　  form.parse(req, function(err, fields, files) {
        console.log(fields)
        console.log(files)
　　  })
    res.end('fetch')
})

app.listen(3001,()=>{console.log('port 3001')})