import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
      await connectMongoDB();
  
      const { username, newUserName, newPassword } = await req.json();
  
      // Find the user by username
      const user = await User.findOne({ username });
  
      // If the user is found, update the password
      if (user) {
        user.username = newUserName;
        if(newPassword){
            const pass = await bcrypt.hash(newPassword, 19)
            user.password = pass;
        }
        await user.save();
  
        console.log('User updated successfully for user:', newUserName);
        return NextResponse.json({ success: true });
      } else {
        console.log('User not found with username:', username);
        return NextResponse.json({success: false, message: 'User not found'});
      }
    } catch (error) {
      console.error('Error updating password:', error);
      return NextResponse.json({ success: false, message: 'Internal server error' });
    }
  }