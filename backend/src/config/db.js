import mongoose from "mongoose"

const connectDB =  async () =>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✔Db connected successfully");
    
  }
  catch(error){
    console.error("error connecting to the database", error);
    process.exit(1)
  }
}

export default connectDB;