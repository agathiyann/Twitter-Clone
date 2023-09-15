"use client";
import React, { useState } from "react";
import Image from "next/image";
import Feed from "@/components/Feed";
import EditProfile from "@/components/EditProfile";

const Page = () => {
  const [editYourProfile, setEditYourProfile] = useState(false);
  return (
    <div className="sm:w-[50%] w-[80%] absolute right-0 sm:relative  sm:m-auto md:border-r-2  h-[100vh] p-2">
      <div>
        <h2 className="font-extrabold text-[20px] px-4">Agathiyan(RA2011042020063)</h2>
        <span className="px-4 mt-2">0 post</span>
      </div>
      {/* Cover Image */}
      <div>
        <Image
          src={"/cover.jpg"}
          alt="Cover"
          width={800}
          height={400}
          className="mt-4 backdrop-brightness-80"
        />
      </div>
      {/* Profile Image */}
      <div className="rounded-full bg-blue-700 w-[50px] h-[50px]  text-[20px] flex items-center justify-center absolute top-[49%] left-[2rem] drop-shadow-lg">
        A
      </div>
      {/* Edit Profile Button */}
      <div
        className="absolute right-[4rem] mt-4 border-2 rounded-[999px] p-2 hover:bg-[#e7e7e8] cursor-pointer transition-all duration-200"
        onClick={() => setEditYourProfile(!editYourProfile)}
      >
        <span>Edit Profile</span>
      </div>
      {editYourProfile && <EditProfile />}
      {/* Name and username */}
      <div className="relative top-[7rem] left-[2rem] space-y-2">
        <div>
          <div className="font-extrabold text-[20px]">Agathiyan(RA2011042020063)</div>
          <div className="font-extralight text-gray-400">@Agathiyan(RA2011042020063)</div>
        </div>
        {/* Bio */}
        <div>
          <p>
            Making X(formerly known as Twitter) clone for the IvyKids
          </p>
        </div>
        {/* following and follwers */}
        <div className="flex gap-x-2">
          <div className="font-extralight text-gray-400">
            <span className="font-extrabold text-black">1</span> Following
          </div>
          <div className="font-extralight text-gray-400">
            <span className="font-extrabold text-black">1</span> Followers
          </div>
        </div>
      </div>
      {/* Posts */}
      <div className="mt-[9rem] border-t-2">
        <h4 className="ml-7 text-[20px] font-extralight">Posts</h4>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    </div>
  );
};

export default Page;
