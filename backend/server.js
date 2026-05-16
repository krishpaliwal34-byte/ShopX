import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Orderroutes from './routes/Orderroutes.js'
import Userroutes from './routes/Userroutes.js'
import connectDB from './database.js'
const app = express();
const PORT = 2000;
app.use(cors())
dotenv.config({ path: "./.env"})
app.use(express.json())
connectDB();

//API routes
app.use("/api/User" , Userroutes);
app.use("/api/order" , Orderroutes);

app.listen(PORT , () => {
    console.log(`Server Start on ${PORT}`)
})