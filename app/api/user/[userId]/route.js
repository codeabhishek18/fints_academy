import dbConnect from "@/dbConfig/dbConnect";
import userService from "@/services/user.service";
import { NextResponse } from "next/server";
const userInstance = new userService();
import { v2 as cloudinary } from 'cloudinary'

export async function PUT(req, {params})
{ 
    try
    { 
        await dbConnect();
         
        const { userId } = await params;
        let updates = await req.json();

        if(updates?.imageURL)
        {
            cloudinary.config({ 
                cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
                api_key: process.env.CLOUDINARY_API_KEY, 
                api_secret: process.env.CLOUDINARY_API_SECRET
            });

            const result = await cloudinary.uploader.upload(updates.imageURL, 
            {
                folder: "profiles/", // Optional: specify folder
            });

            await userInstance.updateProfile(userId, {imageURL: result.secure_url});
            return NextResponse.json({message: 'Display picture updated'})
        }

        await userInstance.updateProfile(userId, updates);
        return NextResponse.json({message: 'Profile updated'})
    }  
    catch(error)
    { 
        return NextResponse.json({error: error.message})
    } 
}

export async function GET(req, {params})
{ 
    try
    { 
        await dbConnect();
         
        const { userId } = await params;
        const user = await userInstance.getUserById(userId);
        return NextResponse.json(user)
    }  
    catch(error)
    { 
        return NextResponse.json({error: error.message})
    } 
}