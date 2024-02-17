import asyncerrorHandler from 'express-async-handler';
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import biddermodel from '../models/biddermodel';

const secret='P@$mandge2003';


const registerBidder = asyncerrorHandler(async (req, res) => {
    const { username, email, password,mobilenum } = req.body;
    if (!username || !email || !password ||!mobilenum) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const BidderAvailable = await biddermodel.findOne({ email });
    if (BidderAvailable) {
      res.status(400);
      throw new Error("Bidder already registered!");
    }
  
    //Hash password
    const hashedPassword = await hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const Bidder = await create({
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
    const Bidder = await findOne({ email });
    //compare password with hashedpassword
    if (Bidder && (await compare(password, Bidder.password))) {
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

  
export { 
    registerBidder,
    loginBidder,
};