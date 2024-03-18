const express = require('express')
const dotenv = require('dotenv').config()
const app = express();
const cors = require('cors')

const routes = require('./Routes')
const {connectDB} = require('./db')

const PORT = process.env.PORT || 1000
connectDB();
app.use(cors())
app.use(express.json())

app.use('/api/task', routes)
app.get('/', (req,res)=>{
    res.status(200).json({mssg:"Hello"})
})


app.listen(PORT,()=>{console.log(`server running on the Port ${process.env.PORT}`)})