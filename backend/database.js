import mongoose from "mongoose";
const connectDB = () => {
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database is connect")
    }
    catch(err){
     console.log("Database is not connect")
    }
}
export default connectDB;