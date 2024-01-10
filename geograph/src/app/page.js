// "use client"
// import { useSession } from "next-auth/react"

// export default function Home() {

//   const {data: session} = useSession();


//   // const data = fetch()


//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <h1 className='text-7xl'>Home</h1>
//         <h2>{session?.user?.username}</h2>
//       </div>
//     </main>
//   )
// }


// WeatherAppPage.js
// WeatherAppPage.js

"use client"
import React from 'react';
import { useSession } from "next-auth/react";
import Link from "next/link";

const WeatherAppPage = () => {
  const {data: session} = useSession(); 
  return (
    <div>
      <div className="flex justify-between items-center p-4">
      <h1 className="text-4xl font-bold p-5 text-left rounded-full">Geograph</h1>
      {session?.user ? (
          <Link href="/settings" className="text-4xl font-bold p-5 text-left rounded-full">
            {session.user}
          </Link>
        ) : <Link href="/signin" className="text-4xl font-bold p-5 text-left rounded-full">Sign In</Link>}
      </div>
      <iframe
        title="Weather Globe"
        src="/dist/index.html"  // Adjust the path accordingly
        width="100%"
        height="800px"
      />
    </div>
  );
};

export default WeatherAppPage;



