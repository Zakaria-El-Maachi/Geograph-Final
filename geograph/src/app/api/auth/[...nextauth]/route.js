import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {label: "username", type: "text", placeholder: "Zakaria"},
                password: { label: "Password ", type: "password", placeholder: "****" },
            },
            async authorize(credentials){
                
                try{
                    const username = credentials?.username;
                    const password = credentials?.password;
                    await connectMongoDB();
                    const user = await User.findOne({username});
                    if(!user) return null;

                    const matchPass = await bcrypt.compare(password, user.password);
                    if(!matchPass) return null;
                    return user;
                }
                catch(error){
                    console.log(error);
                }

            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if(user){
                token.username = user.username;
            }
            return token;
        },          
        async session({session, token}){
            session.user = token.username;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/signin",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};