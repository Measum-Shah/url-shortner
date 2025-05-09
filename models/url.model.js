import mongoose from "mongoose";
const urlSchema = mongoose.Schema({
  shortId:{
    type: String,
    required : true,
    unique: true,
  },
  redirectURL:{
    type: String,
    required : true,
  },
  visitHistory:[{
      timestamp:{
        type: Number,
      },     
    },{timestamps:true}]
 ,
 createdBy:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "user",
}    
  
})

const URL = mongoose.model("url",urlSchema);

export default URL;