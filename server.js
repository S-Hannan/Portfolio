const port = process.env.PORT||5000
const express = require('express')
const app = express()
app.use(express.static('static'))
app.set('views','views')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`This server is running on port http://127.0.0.1:${port}`)
})