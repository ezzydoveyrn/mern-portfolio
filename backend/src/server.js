import express from "express"
import dotenv from "dotenv"
import router from "./routes/userRoute.js";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


//middleware
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true, // allow cookies / tokens
  })
);
app.use(express.json());
app.use("/users", router)




const runApp = async()=>{
  try{
   await connectDB();
   app.listen(PORT, () => {
     console.log("server started on port:", PORT);
   });

  }
  catch(error){
    console.error("error connecting to the database", error)
  }
}


runApp();