import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const userSchema = mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String,
    genero:String
})

userSchema.plugin(mongoosePaginate);
const userModel = mongoose.model("users", userSchema);

export default userModel