import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import mongoose from "mongoose";
import orderModel from "./models/orderModel.js";
import userModel from "./models/userModel.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})
app.use("/users", userRouter);

const enviroment = async () => {
    await mongoose.connect("mongodb+srv://javierveron:Javier123!@cluster0.dlm8a08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    /* const result = await orderModel.insertMany([
        {name:"Muzzarella", size:"grande", price:16500, quantity:1, date:"2025-07-05"},
        {name:"Jamón con Morrones", size:"grande", price:21700, quantity:1, date:"2025-07-04"},
        {name:"Fugazzeta", size:"chica", price:42000, quantity:2, date:"2025-07-05"},
        {name:"Pareja", size:"grande", price:23100, quantity:1, date:"2025-07-03"},
        {name:"Clásica", size:"chica", price:33600, quantity:1, date:"2025-07-05"}
    ])
    console.log(result); */

    // Agregations
    //let orders = await orderModel.aggregate([
        /* {
            $match:{size:"chica"}
        },
        {
            $group:{_id:"$name", cantidad:{$sum:"$quantity"}}
        } */
        /* {
            $match:{date:"2025-07-05"}
        }, */
        /* {
            $group:{_id:"$date", total:{$sum:"$price"}}
        },
        {
            $group:{_id:1, orders:{$push:"$$ROOT"}}
        },
        {
            $project:{
                "_id":0,
                order:"$orders"
            }
        },
        {
            $merge:{
                into:"reports"
            }
        }
        /* {
            $group:{_id:"$name", total:{$sum:"$price"}}
        }, */
        /* {
            $match:{name:"Muzzarella"}
        },
        {
            $count:"cantidad"
        } */
    //]);
    
    //console.log(orders);

    // Agregar 1000 usuarios a nuestra colección "users"
    /* for (let i=1; i<=1000; i++) {
        await userModel.create({nombre:"Juan" + i, apellido:"Perez"+i, email:"juan"+i+"perez"+i+"@gmail.com", genero:"M"})
    }

    console.log("Usuarios creados!"); */

    /* let result = await userModel.paginate({},{limit:20, page:2});
    console.log(result); */
}

enviroment();