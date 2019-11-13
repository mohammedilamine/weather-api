if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()

}


const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather',(req,res)=>{

})

app.listen(3000, ()=>{
    console.log('Server Started')
})