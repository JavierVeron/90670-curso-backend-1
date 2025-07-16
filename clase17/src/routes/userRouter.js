import { Router } from "express";
import userModel from "../models/userModel.js";

const userRouter = Router();
userRouter.get("/", async (req, res) => {
    let limit = req.query.limit ? req.query.limit : 20;
    let page = req.query.page ? req.query.page : 1;



    const users = await userModel.paginate({}, {limit:limit, page:page, lean:true});
    console.log(users);
    
    res.render("users", {users})
})

export default userRouter