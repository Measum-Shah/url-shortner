import express from "express";
import { generateShortURL, urlAnalytics, redirectToURL } from "../controllers/url.controller.js";


const urlRoute = express.Router();

urlRoute.post("/", generateShortURL); 
urlRoute.get("/:shortId",redirectToURL)
urlRoute.get("/analytics/:shortId",urlAnalytics)

export default urlRoute;
