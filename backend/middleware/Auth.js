import express from 'express'
import jwt from 'jsonwebtoken'
const SECRET = "newsuperkey"

const auth = (req,res,next)=> {
    const token = req.headers.authorization
   
     if(!token){
        return res.status(401).json({msg: "No Token"})
     }
     try{
        const decoded = jwt.verify(token , SECRET)
        req.user = decoded;
        next()
     }catch(err){
     console.log(err)
     }
}
export default auth;