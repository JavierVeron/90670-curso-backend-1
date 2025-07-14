import mongoose from "mongoose"

const estudianteSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String,
    genero:String,
    cursos:{
        type:[
            {
                curso:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"cursos"
                }
            }
        ],
        default:[]
    }
})

estudianteSchema.pre("find", function() {
    this.populate("cursos.curso");
})

export const estudianteModel = mongoose.model("estudiantes", estudianteSchema);