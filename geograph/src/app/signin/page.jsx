"use client"

import Link from "next/link";
import { useState } from "react";
import Mess from "../Components/message";
import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";

export default function signin(){

    const [username, setUserName] = useState("");
    const [password, setPass] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!username){
            setError("Username is necessary");
            return;
        }
        if(!password){
            setError("Password is necessary");
            return;
        }
        try{
            const res = await signIn("credentials", {
                username,
                password,
                redirect: false,
            });

            if(res?.error){
                setError("Invalid Credentials");
                return;
            } else{
                router.replace("/");
            }
        }catch (error){
            console.log(error)
        }

    }


    return (
        <>
            <div className="w-full max-w-xs m-auto bg-indigo-800 rounded-lg shadow-md p-5">
                <h1 className="text-center text-white text-2xl font-bold">Sign in</h1>
                <p className="text-center text-gray-500 text-xs">Sign in to access Downloading and Sharing Features</p>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div>
                    <input onChange={(e) => {setUserName(e.target.value)}} className="w-full p-2 mb-6 text-indigo-700 leading-tight rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" id="login" placeholder="Username" />
                    </div>
                    <div>
                    <input onChange={(e) => {setPass(e.target.value)}} className="w-full p-2 mb-4 text-indigo-700 leading-tight rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/register" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" >
                            Do not have an account ?
                        </Link>
                        <Link href="/" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" >
                            Go to Weather Globe
                        </Link>
                    </div>
                    </div>
                    <div>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Signin
                    </button>
                    <Mess text={error} />
                    </div>
                </form>
            </div>
            <div className="relative h-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                    <path className="fill-indigo-700" fillOpacity="0.3" d="M 2 112 C 28 153 108 159 154 159 C 182 159 255.3333 155 336 130 C 384 120 503 96 566 83 C 630 73 794 63 856 65 C 916 66 1059 81 1155 97 C 1256 117 1354.3333 136.3333 1441 160 L 1440 192 L 1392 192 C 1344 192 1248 192 1152 192 C 1056 192 960 192 864 192 C 768 192 672 192 576 192 C 480 192 384 192 288 192 C 192 192 96 192 48 192 L 0 192 Z"></path>
                    <path className="fill-indigo-700" fillOpacity="0.3" d="M 0 51 C 251 47 369 64 427 76 C 471 86 589 113 627 121 C 656 126 833 141 861 141 C 889 141 1130 144 1151 144 C 1194 137 1385 171 1441 160 L 1440 192 L 1392 192 C 1344 192 1248 192 1152 192 C 1056 192 960 192 864 192 C 768 192 672 192 576 192 C 480 192 384 192 288 192 C 192 192 96 192 48 192 L 0 192 Z"></path>
                </svg>

                <h1 className="text-5xl font-semibold absolute bottom-1/3 left-10">GeoGraph</h1> 
            </div>
        </>
    );
}