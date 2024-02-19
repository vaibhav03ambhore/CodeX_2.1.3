import asyncerrorHandler from 'express-async-handler';
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import model from '../models/biddermodel.js';

const secret='P@$mandge2003';


const registerBidder = asyncerrorHandler(async (req, res) => {
    const { username, email, password,mobilenum } = req.body;
    if (!username || !email || !password ||!mobilenum) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const BidderAvailable = await model.findOne({ email });
    if (BidderAvailable) {
      res.status(400);
      throw new Error("Bidder already registered!");
    }
  
    //Hash password
    const hashedPassword = await hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const Bidder = await model.create({
      username,
      email,
      password: hashedPassword,
      mobilenum,
    });
  
    console.log(`Bidder created ${Bidder}`);
    if (Bidder) {
      res.status(201).json({ _id: Bidder.id, email: Bidder.email });
    } else {
      res.status(400);
      throw new Error("Bidder data is not valid");
    }
    res.json({ message: "Register the Bidder" });
});


const loginBidder = asyncerrorHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const Bidder = await model.findOne({ email });
    //compare password with hashedpassword
    if (Bidder && (await compare(password, Bidder.password))) {
      const token = jwt.sign({
          Bidder: {
            username: Bidder.Biddername,
            email: Bidder.email,
            id: Bidder.id,
          },
        },
        secret,
        { expiresIn: "15m" }
      );

      // return res.status(200).cookie(token,{
      //   httpOnly: true,
      //   sameSite: 'strict',
      //   maxAge: 90 * 24 * 60 * 60 * 1000 // 90 days
      // });
      res.cookie("jwt",token);
      res.status(200).json({_id:Bidder._id,
        username:Bidder.username,
        email:Bidder.email,
        mobilenum:Bidder.mobilenum});
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
});

const logoutBidder = asyncerrorHandler(async (req, res) => {
  res.clearCookie('jwt');
  res.json("deleted successfully");
});


const senduser=asyncerrorHandler(async(req,res)=>{
  res.json("authenticated user");
});

  
export { 
    registerBidder,
    loginBidder,
    logoutBidder,
    senduser,
    secret,
};