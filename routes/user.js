import express from "express";
import { handleUserLogin, handleUserLogout, handleUserSignup } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/",handleUserSignup);
userRouter.post("/login",handleUserLogin);
userRouter.get("/logout",handleUserLogout);





