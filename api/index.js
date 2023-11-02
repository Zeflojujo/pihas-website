const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto-js");
// const nodemailer = require("nodemailder");

const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

// mongodb+srv://zeflojujo:<password>@cluster0.wsad4bi.mongodb.net/

mongoose
  .connect("mongodb+srv://zeflojujo:kimaryo@cluster0.wsad4bi.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log("Server is running  on port 8000");
});


const User = require("./models/User");
// const News = require("./models/Slides");

//function to send verification Email to the user

const sendVerificationEmail = async(email,verificationToken) => {
     //create nodemailer transport

     const transporter = nodemailer.createTransport({
        //configure the email service
        service: "gmail",
        auth:{
            user:"zeflojujo52@gmail.com",
            pass:"#Jose2020"
        }
     })

     //compose the email option
     const mailOptions = {
        From:"amazon.com",
        to:email,
        subject:"Email Verification",
        text: `please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`
     }

     //send the email
     try{
        await transporter.sendMail(mailOptions);
     }catch(error){
        console.log("Error sending verification email", error);
     }
}

//endpoint to register in the app
app.post("/admin/login", async(req,res) => {
    try{
      console.log("am here");
        const {name, email, password} = req.body;

        //check if the email is already registered
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message: "Email already registered"});
        }

        //create a new User
        const newUser = new User({name, email, password});

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString('hex');

        //save the user to the database
        await User.save();

        //send the verificatin email to the user
        sendVerificationEmail(newUser.email, newUser.verificationToken);

    }catch(error){
        console.log("error registering user", error);
        res.status(500).json({message: "Registration failed" })
    }
})

//endpoint to login to the app
app.post("/admin/login", async(req,res) => {
  try{
    console.log("am here");
      const { email, password} = req.body;

      //check if the email is already registered
      const existingUser = await User.findOne({email});

      if(!existingUser){
          return res.status(400).json({message: "Invalid Email"});
      }

      if(user.password !== password){
        return res.status(400).json({message: "Invalid password"});
      }



      //create a new User
      const newUser = new User({ email, password});

      //generate and store the verification token
      newUser.verificationToken = crypto.randomBytes(20).toString('hex');

      //save the user to the database
      await User.save();


  }catch(error){
      console.log("error login user", error);
      res.status(500).json({message: "Login failed" })
  }
})

//endpoint to verify the email

app.get("/verify/:token", async(req,res) => {
    try{
        const token = req.params.token;

        //find the user with the given verification token
        const user = await user.findOne({verificationToken: token})
        if(!user){
            return res.status(404).json({message:"Invalid verification token"})
        }

        //Mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message: "Email verified successfully"})

    } catch(error){
        res.status(500).json({message: "Email Verification Failed"});
    }
})