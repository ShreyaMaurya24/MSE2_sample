const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req,res)=>{

  try{

    const {name,email,password} = req.body;

    const userExist = await User.findOne({email});

    if(userExist){
      return res.status(400).json({message:"User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = new User({
      name,
      email,
      password:hashedPassword
    });

    await user.save();

    res.json({message:"User Registered"});

  }catch(error){

    res.status(500).json({message:"Registration Failed"});

  }

});


router.post("/login", async (req,res)=>{

  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({message:"User not found"});
  }

  const isMatch = await bcrypt.compare(password,user.password);

  if(!isMatch){
    return res.status(400).json({message:"Wrong Password"});
  }

  const token = jwt.sign({id:user._id},"secretkey");

  res.json({token});

});

module.exports = router;