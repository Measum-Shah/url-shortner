import {getUser} from "../services/auth.js";

export const restrictToLogedInUserOnly = async (req, res, next) => { 
  console.log(req.cookies.sessionId);
  const userSessionId = req.cookies.sessionId;

  if(!userSessionId) {
    return res.render('login', {
      error: "You need to login first",
    });
  }

  const user = getUser(userSessionId);
  if(!user) {
    return res.render('login', {
      error: "You need to login first",
    });
  }
  req.user = user;
  next();
}  
