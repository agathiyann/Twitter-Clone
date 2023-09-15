"use client";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { db } from "../../../firebaseConfig";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      router.push("/");

      const userData = {
        name: name,
        email: email,
        username: userName,
        password: password, 
      };

      const docRef = await db.collection("users").add(userData);
      console.log("User data added with id:", docRef.id);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <main
      className="md:w-[500px] md:h-[600px] w-[400px] h-[550px] rounded-lg bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3"
      style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0, 0.4" }}
    >
      {/* Twitter login Page */}
      <div className="items-center flex justify-center">
      <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" height="4.6em"> 
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"></path> 
  </svg>
          </div>
        <div>
          <h2 className="font-bold text-[20px] ml-[5rem] mt-5"style={{ color: 'white' }}>
            Sign Up
          </h2>
          {/* Sign in with Email and Password */}
          <form action="" method="POST"></form>
          <div className="flex flex-col gap-y-6 mt-9">
            <input
              type="text"
              placeholder="Name"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-[70%] m-auto h-[2rem]  rounded-[999px] border-2 text-blue-500"
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </div>
          
        <div className="text-center mt-4 md:mt-6 space-x-2">
          Already have an account?{" "}
          <Link href={"/"} className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
