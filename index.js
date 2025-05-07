import express from "express"
import path from "path";
import urlRoute from "./routes/url.router.js";
import connectToMongoDb from "./connectDb.js";
import { staticRoute } from "./routes/staticRouter.js";


const PORT = 8000;
const app = express();

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/url', urlRoute);
app.use('/',staticRoute)


// DB Connection + Start Server
connectToMongoDb('mongodb://localhost:27017/short-url')
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(`Not connected to DB, error occurred: ${e}`);
  });
