import mongoose from "mongoose";

const LoginSchema =  new mongoose.Schema({
    email:{
        type:String,
        require: true,
    },
    password:{
                type:String,
                require: true,
        },
})
const User = mongoose.model("User" , LoginSchema )
export default User