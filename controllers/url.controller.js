import { nanoid } from "nanoid";
import URL from '../models/url.model.js';
import { create } from "domain";

export const generateShortURL = async (req, res) => {
  const body = req.body;
  // console.log(body);

  if (!body) {
    return res.status(400).json({
      error: "URL is required"
    });
  }

  if(body){
    if(!body.url){
      return res.status(400).json({
        error: "URL is required"
      });
    }
  }


  const shortId = nanoid(8);
  // console.log(req.user);
  const newURL = await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitedHistory: [],
    createdBy: req.user._id,
  });
  console.log(newURL.createdBy);
  // const allurls = await URL.find({});
    
  return res.render("home", {
    id: shortId,
    // urls: allurls,
  });
 
};

export const redirectToURL = async(req,res) =>{
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId,

  },
{
  $push:{
    visitHistory :
    {timestamp:Date.now()} ,
  }
})
res.redirect(entry.redirectURL)

};

export const urlAnalytics = async(req,res) =>{
  const shortId = req.params.shortId;
  const result = await URL.findOne({shortId});
  // console.log(result)
  return res.json({
    "totalClicks" : result.visitHistory.length,
    "analytics" : result.visitHistory
  }).status(200);
}

export const getAllURLS = async(req,res) =>{
  const currentPath = req.path
  const allurls = await URL.find({createdBy: req.user._id});
  console.log(currentPath);
  return res.render("home",{
    urls: allurls,
    currentPath: currentPath,
  })
}
