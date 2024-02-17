import Jwt  from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import Organizer from "../models/userModel.js";

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    //read jwt from the 'jwt' cookie
    token=req.cookies.jwt;
    if(token){
        try{
            const decoded=Jwt.verify(token,process.env.JWT_SECRET);
            req.organizer=await Organizer.findById(decoded.userId).select("-password");
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

export {authenticate};