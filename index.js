import express, { urlencoded } from "express"
import urlRoute from "./routes/url.router.js";
import connectToMongoDb from "./connectDb.js";
const PORT = 8000;



// DBConnection
// connectToMongoDb('mongodb://localhost:27017/short-url').then(()=>{
//   console.log("Mongodb Connected")
// }).catch((e)=>{
//   console.log( `Not connected to DB, error occured: ${e}`)
// })

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})

// routes
app.use('/url',urlRoute)