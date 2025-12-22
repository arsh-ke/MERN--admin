import express from 'express'
import authRoute from '../server/router/auth-route.js'
import dotenv from 'dotenv'
import connectdb from './utils/DB.js'
dotenv.config({})
const app = express()
app.use(express.json())

app.use('/auth',authRoute)
connectdb()
.then(()=>{


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port:  ${PORT}`);
})
})