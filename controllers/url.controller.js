import { nanoid } from "nanoid";
import URL from '../models/url.model.js';

export const generateShortURL = async (req, res) => {
  const body = req.body;
  console.log(body);

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
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitedHistory: [],
  });

  return res.status(200).json({
    id: shortId
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
