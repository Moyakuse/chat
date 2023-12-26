'use client'

import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    return (
        <div className={`flex flex-row justify-center items-center bg-blue-800 h-screen`}>
            <div className={`flex flex-col justify-center items-center bg-blue-300 px-2 rounded-xl py-2 gap-y-4`}>
                <h2 className={`text-white font-bold text-2xl`}> Login to my Penguin Chat</h2>
                <p> Login or register an account to start your life on Penguin Chat</p>
                {/* Correcting the conditional rendering */}
                {status === "authenticated" ? (
                    <button onClick={() => signOut()} className={`bg-purple-500 text-white rounded-xl w-full py-2`}>Sign out</button>
                ) : (
                    <button onClick={() => signIn("github")} className={`bg-purple-500 text-white rounded-xl w-full py-2`}>Sign in with GitHub</button>
                )}
            </div>
        </div>
    )}