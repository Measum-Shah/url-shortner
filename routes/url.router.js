import express from "express";
import { generateShortURL, urlAnalytics, redirectToURL,getAllURLS } from "../controllers/url.controller.js";



const urlRoute = express.Router();

urlRoute.post("/", generateShortURL); 
urlRoute.get("/all",getAllURLS)
urlRoute.get("/:shortId",redirectToURL)
urlRoute.get("/analytics/:shortId",urlAnalytics)

export default urlRoute;
