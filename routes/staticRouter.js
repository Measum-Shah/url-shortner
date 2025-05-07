import express from 'express';

export const staticRoute = express.Router();

staticRoute.get('/',(req,res)=>{
  return res.render('home')
})