import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.listen(port, () => {
    console.log("Servidor activo: " + port);
})
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);