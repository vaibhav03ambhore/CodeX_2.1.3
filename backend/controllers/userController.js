import asyncHandler from '../middlewares/asyncHandler.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/createTokens.js';
import Organizer from '../models/userModel.js';

const createOrganizer=asyncHandler(async(req,res)=>{
    
    const {username,email,password,role,address,organization}=req.body;
     
    if (!username || !email || !password || !address) {
        res.status(400);
        throw new Error("Please fill all the required fields");
      }

    const userExists=await Organizer.findOne({email});   
    if(userExists){
        res.status(400);
        throw new Error("Organizer already exists");
    }

   
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);  //providing salt to password.

    const newOrganizer = new Organizer({
        username,
        email,
        password: hashedPassword,
        role: role || 'organizer',
        address,
        organization: organization || null 
      });

    try{
        await newOrganizer.save();
        // creatToken(res,newOrganizer._id);
        res.status(201).json(newOrganizer);

    }catch(error){
        res.status(400);
        throw new Error("Invalid organizer data");
    }
});


const loginOrganizer=asyncHandler(async(req,res)=>{
    const {email, password}=req.body
    
    const existingOrganizer= await Organizer.findOne({email});
    // console.log(existingOrganizer._id);
    if(!existingOrganizer){
        res.status(400);
        throw new Error("Invalid email or password");
    }
    else{
        const isPasswordValid=await bcrypt.compare(password,existingOrganizer.password);
        if(isPasswordValid){
            const accessToken = generateToken(res, existingOrganizer._id);
            res.status(201).json(
                {
                    _id:existingOrganizer._id,
                    username:existingOrganizer.username,
                    email:existingOrganizer.email,
                    address:existingOrganizer.address,
                    accessToken:accessToken
                }
            );
        }
        else {
            res.status(401);
            throw new Error("email or password is not valid");
        }
    }
});

const logoutCurrentOrganizer=asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0),
    });
    res.status(200).json({message:"Successfully logged out"});
    
});


const getAllOrganizers=asyncHandler(async(req,res)=>{
    const organizers=await Organizer.find({});
    res.json(organizers);
});


export {createOrganizer,loginOrganizer,logoutCurrentOrganizer,getAllOrganizers};