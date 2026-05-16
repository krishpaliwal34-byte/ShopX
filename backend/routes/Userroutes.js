import express, { Router } from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import auth from '../middleware/Auth.js'
import jwt from 'jsonwebtoken'
const router = express.Router()

const SECRET = "newsuperkey";

//signup
router.post("/signup" , async (req,res) => {
    const {email , password} = req.body;
    const userexist = await User.findOne({email})
    if(userexist){
        return res.status(400).json({msg: "User Alredy Exist"})
    }
    const hashpass = await bcrypt.hash(password,10)
    await User.create({
        email,
        password: hashpass,
    })
    res.json({msg: "Signup Successfully"})
})

//Login
router.post("/login" , async (req,res) => {
    const {email , password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({msg: "User not found"})
    }
    const ismatch = await bcrypt.compare(password , user.password)
    if(!ismatch){
        return res.status(401).json({msg: "Incorrect Password"})
    }
    const token = jwt.sign(
        {id: user._id , email: user.email},
        SECRET,
        {expiresIn: "1h"}
    )
    res.json({msg: "Login Successfull" , token , email: user.email})
}
)
//dashboard
router.get("/dashboard" ,auth , async (req,res) => {
 res.json({
    email: req.user.email
 })
})
export default router