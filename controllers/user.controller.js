import {User} from '../models/user.model.js';
import { v4 as uuidv4 } from 'uuid';
import { setUser,getUser } from '../services/auth.js';

const handleUserSignup = async (req, res) => {
  const {name,email,password} = req.body;
  await User.create({
    name,
    email,
    password,
  })
  return res.render("home")

};

const handleUserLogin =async (req,res) => { 
  const {email,password} = req.body;
 const user =  await  User.findOne({
    email,
    password,
  })
  if (!user) {
    return res.render('login',{
      error: "Invalid email or password",
    });
  }

  const sessionId = uuidv4();
  setUser(sessionId,user);
  res.cookie("sessionId",sessionId,{
    maxAge: 1000*60*60*7,
    httpOnly: true,
  });

  
return res.render("home");
}

const handleUserLogout = async(req, res) => {
  const sessionId = req.cookies.sessionId;
  if (sessionId) { 
    console.log(sessionId);
    res.clearCookie("sessionId");
    return res.render('login',{ message: 'Logged out successfully' });
  } else {
    return res.status(400).json({ message: 'No active session' });
  }
};

export {handleUserSignup,handleUserLogin,handleUserLogout}