import React from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const LogOutbox = () => {
  const router = useRouter();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        router.push("/");
        console.log("User signed out");
        
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };
  return (
    <div className="absolute bottom-[5rem] left-6 sm:left-auto sm:right-6 p-6 font-extrabold bg-[#cecee0] rounded-2xl shadow-md">
      <div className="text-lg mb-2">Add an existing account</div>
      <div className="text-lg cursor-pointer" onClick={handleSignOut}>
        Logout @agathi
      </div>
    </div>
  );
};

export default LogOutbox;