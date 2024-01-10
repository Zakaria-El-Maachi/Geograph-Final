import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(req){
    try{
        await connectMongoDB();
        const {username} = await req.json();
        const userID = await User.findOne({username}).select("_id");
        console.log("User Registration Failure, User exists with ID : ", userID);
        return NextResponse.json({userID})
    } catch(error) {
        console.log(error)
    }
}