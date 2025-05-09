import express from 'express';
import { handleUserLogin } from '../controllers/user.controller.js';

export const staticRoute = express.Router();

staticRoute.get('/',(req,res)=>{
  return res.render('home')
})
staticRoute.get("/signup",(req,res)=>{
  return res.render("signup")
})

staticRoute.get("/login",(req,res)=>{
  return res.render("login")
})