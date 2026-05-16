import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    productName: String,
    productId: String,
    name: String,
    number: Number,
    Address: String,
})
const Order = mongoose.model("Order" , OrderSchema)
export default Order