import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const signUpUser = async(req, res)=>{
  try{
    const {email, password} = req.body;
    
    if (!email) {
      return res.status(400).json({ message: "email field is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password field is required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }else{
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();

      // Generate JWT token
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      );

      return res.status(201).json({
        message: "user created successfully",
        user: { id: newUser._id, email: newUser.email },
        token,
      });
    }
  }
  catch(error){
    console.error("error in signUpUser function", error);
    return res.status(500).json({message:"internal server error"});
  }
}

//login user function

const loginUser = async(req, res)=>{
  try{
    const {email, password} = req.body;
    if (!email) {
      return res.status(400).json({ message: "email field is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password field is required" });
    }

    const existingUser = await User.findOne({email});

    if(!existingUser){
      return res.status(404).json({message:"user does not exist, signup"})
    }else{
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if(isMatch){
        const token = jwt.sign(
          { id: existingUser._id, email: existingUser.email },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );

        return res.status(200).json({
          message: "user logged in successfully",
          user: { id: existingUser._id, email: existingUser.email },
          token,
        });
      }else{
        return res.status(400).json({message:"wrong password"});
      }
    }
  }
  catch(error){
    console.error("error in loginUser function", error);
    return res.status(500).json({message:"internal server error"});
  }
}


//get user function
const getUser = async(req, res)=>{
  try{
    const users  = await User.findById(req.params.id);
    return res.status(200).json(users)
  }
  catch(error){
    console.error("error in getUser function", error);
    return res.status(500).json({message:"internal server error"});
  }
}


export {signUpUser, loginUser,getUser}