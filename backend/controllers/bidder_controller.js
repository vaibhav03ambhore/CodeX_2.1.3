const asyncerrorHandler=require('express-async-handler');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bidder=require('../models/biddermodel');


//secret kay
const secret='P@$mandge2003';


const registerBidder = asyncerrorHandler(async (req, res) => {
    const { username, email, password,mobilenum } = req.body;
    if (!username || !email || !password ||!mobilenum) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const BidderAvailable = await bidder.findOne({ email });
    if (BidderAvailable) {
      res.status(400);
      throw new Error("Bidder already registered!");
    }
  
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const Bidder = await bidder.create({
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
    const Bidder = await bidder.findOne({ email });
    //compare password with hashedpassword
    if (Bidder && (await bcrypt.compare(password, Bidder.password))) {
      const accessToken = jwt.sign({
          Bidder: {
            username: Bidder.Biddername,
            email: Bidder.email,
            id: Bidder.id,
          },
        },
        secret,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
});

  
module.exports = { 
    registerBidder,
    loginBidder,
};