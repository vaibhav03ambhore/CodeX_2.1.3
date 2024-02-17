import Jwt  from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    //read jwt from the 'jwt' cookie
    token=req.cookies.jwt;
    if(token){
        try{
            const decoded=Jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.userId).select("-password");
            next();
        }catch(error){
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    else{
        res.status(401);
        throw new Error("Not authorized, no token found");
    }
});

//check if user is admin or not

const authorizeAdmin=asyncHandler(async(req,res,next)=>{
    if(req.user && req.user.isAdmin){
        next();
    }
    else{
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
});

export {authenticate,authorizeAdmin};