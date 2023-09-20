"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth,provider } from "../../firebaseConfig";
import { Auth } from "./signinwithgoogle";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {AiFillEye} from "react-icons/ai";
export const DisplayName = () => {
  const name = user.DisplayName;
  console.log(name);
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    const result = await signInWithEmailAndPassword(auth, provider);
    const cookies = new Cookies();
    cookies.set("auth-token", result.user.refreshToken);
    setIsAuth(true);
  };
  
  
  const handleShowPassword = () => {
    const element = document.getElementById("user-password");
    element.type = (element.type === "password") ? "text" : "password";
  };
  
  return (
    <main
      className="md:w-[500px] md:h-[600px] w-[400px] h-[550px] rounded-lg bg-black  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3"
      style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0, 0.4","color":"white" }}
    >
      <div>
      <div className="items-center flex justify-center">
      <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" height="4.6em"> 
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"></path> 
  </svg>
          </div>
        <div>
          <h2 className="font-extrabold text-[20px] ml-[5rem] mt-5"style={{ color: 'white' }}>
            Sign into X
          </h2>
          <div className="space-y-3 mt-[2rem]">
            {/* Sign in with Google */}
            <div
              className="flex justify-center w-[70%] m-auto space-x-2 p-2 rounded-[999px] bg-slate-200 cursor-pointer"onClick={Auth}
            >
              <Image src={"/google.png"} alt="Google" width={32} height={32} />
              <p className="mt-1 font-bold">Continue with Google</p>
            </div>
          </div>

          <form action=""></form>
          <div className="flex flex-col gap-y-6 mt-9">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ marginLeft: '70px' }}>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-[83%] m-left h-[2rem] px-2  py-6 rounded-lg border-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="user-password"
              />
              <span id="show-password" onClick={handleShowPassword} style={{ }} ><AiFillEye/></span>
            </div>
            <button
              className="w-[70%] m-auto h-[3rem] rounded-[999px] border-2 text-blue-500 hover:bg-blue-400 transition-color duration-150 hover:text-black hover:font-bold"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
          <div className="text-center mt-4">Forgot Password</div>
        </div>
        <div className="text-center mt-4 md:mt-6 space-x-2">
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"} className="text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );

}