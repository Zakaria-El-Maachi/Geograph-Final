import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user"
import bcrypt from "bcryptjs"

export async function POST(req){
    try{
        const {username, password} = await req.json();

        await connectMongoDB();

        const pass = await bcrypt.hash(password, 19)
        await User.create({username, password:pass});
        
        console.log("User Registered Successfully")
        return NextResponse.json({message:"User Registered Successfully"}, {status: 201});
    } catch(error){
        console.log(error)
        return NextResponse.json({message: "An error has occurred"}, {status: 500})
    }
}