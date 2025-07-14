import mongoose from "mongoose"

const cursoSchema = new mongoose.Schema({
    nombre:String,
    profesor:String,
    tutorAdjunto:String,
    estudiantes: {
        type:Array,
        default:[]
    }
})

export const cursoModel = mongoose.model("cursos", cursoSchema);