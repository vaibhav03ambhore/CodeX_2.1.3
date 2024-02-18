import Jwt  from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import Organizer from "../models/userModel.js";

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    //read jwt from the 'jwt' cookie
    token=req.cookies.jwt;
    // console.log(token);
    if(token){
        try{
            const decoded=Jwt.verify(token,process.env.JWT_SECRET);
            // console.log(decoded);
            req.organizer=await Organizer.findById(decoded.id);
            // console.log(decoded,req.organizer);
            // console.log(req.organizer);
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