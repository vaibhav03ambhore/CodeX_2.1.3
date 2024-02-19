import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: 'vaibhavdada',
  api_key: '627625158489797',
  api_secret:'h1uAJjP8prirKsKL9SXY_hGqSH0' 
});


const uploadOnCloudinary=async (localFilePath)=>{

    try{
        if(!localFilePath){
            console.log("Please provide a valid file path");
            return;
        }
       
        const response=await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        
        console.log("File uploaded successfully on cloudinary ", response.secure_url);
        return response;

    }catch(error){
        
        console.log("error in upload cloudnary: ",error);

        if (error.http_code === 401) {
            console.error("Authentication error. Check Cloudinary credentials.");
        }

        //if file not uploaded then unlink the local file
        fs.unlinkSync(localFilePath);
    
    }
}


export default uploadOnCloudinary;