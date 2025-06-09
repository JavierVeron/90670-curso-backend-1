import express from "express"
import { userRouter } from "./routes/users.router.js";
import { petsRouter } from "./routes/pets.router.js";
import {__dirname} from "./utils.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor activo: " + port);
});
app.use("/api/users", userRouter);
app.use("/api/pets", petsRouter);
//app.use(express.static("public"));
//app.use("/static", express.static("public"));
app.use("/", express.static(__dirname + "/public"));
/* app.use(function (req, res, next) {
    console.log("Estoy acá #1");
    next();
}); */

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send("Error en la aplicación!")
})