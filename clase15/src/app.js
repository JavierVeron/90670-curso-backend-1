import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import mongoose from "mongoose";
import productRouter from "./routes/productRouter.js";
import viewsRouter from "./routes/viewsRouter.js";

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
app.use("/api/products", productRouter);
app.use("/", viewsRouter);

mongoose.connect("mongodb+srv://javierveron:Javier123!@cluster0.dlm8a08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")