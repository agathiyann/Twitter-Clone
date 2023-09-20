"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import LogOutbox from "./LogOutbox";
import { DisplayName } from "@/UserInformation/DisplayName";

const LeftSidebar = () => {
  const navData = [
    {
      title: "Home",
      icon: <AiOutlineHome color="white"/>,
      path: "/home",
    },
    {
      title: "Explore",
      icon: <AiOutlineSearch color="white"/>,
      path: "/explore",
    },
    {
      title: "Notifications",
      icon: <AiOutlineBell color="white"/>,
      path: "/notifications",
    },
    {
      title: "Messages",
      icon: <AiOutlineMail color="white"/>,
      path: "/messages",
    },
    {
      title: "Profile",
      icon: <AiOutlineUser color="white"/>,
      path: "/profile",
    },
  ];
  const [isLogOutOpened, setIsLogOutOpened] = useState(false);
  const handleLogoutBox = () => {
    setIsLogOutOpened(!isLogOutOpened);
  };
  return (
    <div className="w-15 h-[100vh]  md:w-[25%] fixed border-r-2 overflow-y-auto bg-black justify-center ">
      <div className="logo">
        {/* Large screen logos */}
        <Link href={"/home"} className="hidden sm:block justify-center">

        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" height="4.6em"> 
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"></path> 
  </svg>
</div>

        </Link>
        {/* Mobile logo */}
        <Link href={"/home"} className="sm:hidden">
          <div className="group flex ml-3 mt-2 items-center p-2 w-fit rounded-full hover:bg-blue-200 transition-colors duration-300">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
          </div>
        </Link>
        <div>
          {navData.map((item, index) => (
            <div key={index}>
              <Link
                href={item.path}
                className="flex gap-x-4 mt-4 px-4 py-2 rounded-[999px]  hover:bg-[#3b82f6] sm:ml-8 ml-2 items-center w-fit transition duration-300"
              >
                <div className="text-[26px]">{item.icon}</div>
                <div className="text-[18px] hidden lg:block font-light">
                <span style={{ color: "white" }}>{item.title}</span>
                  
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* profile information */}
        <div
          className="flex absolute bottom-0 sm:ml-8 ml-2 gap-x-4 items-center w-fit hover:bg-[#3d3d3d] transition-colors duration-100 rounded-[999px] p-2 cursor-pointer  "
          onClick={handleLogoutBox}
        >
          {/* profile logo */}
          <div >
          <Image
            src={'/copy.png'}
            alt="Avatar"
            width={55}
            height={55}
            className="border-black border-2 rounded-full ml-3 mt-1"
          />
          </div>
          {/* Name & username */}
          <div className="hidden lg:block">
            <div className="font-extrabold">
              <DisplayName />
              
            </div>
            <div className="font-light text-[#6191c4]">@agathi</div>
          </div>
          {/* three dots */}
          <div className="hidden lg:block">
            <FiMoreHorizontal />
          </div>
        </div>
        {isLogOutOpened && <LogOutbox />}
        
      </div>
    </div>
  );
};

export default LeftSidebar;
