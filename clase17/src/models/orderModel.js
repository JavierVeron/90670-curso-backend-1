import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    name:String,
    size:{
        type:String,
        enum:["chica", "grande"],
        default:"grande"
    },
    price:Number,
    quantity:Number,
    date:Date
})

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel