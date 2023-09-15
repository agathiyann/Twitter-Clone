import Image from "next/image";
import React from "react";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";

const Feed = () => {
  return (
    <div className="bg-black p-4 rounded-lg shadow-lg mb-4">
      <div className="flex">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image
            src={'/copy.png'}
            alt="Avatar"
            width={55}
            height={55}
            className="border-black border-2 rounded-full ml-3 mt-1"
          />
        </div>
        <div style={{ color: "white" }}>
          <h2 className="text-lg font-semibold">Agathiyan(RA2011042020063)</h2>
          <h5 className="text-gray-500">@agathi</h5>
        </div>
        <div className="ml-auto">
          <BsThreeDots className="text-gray-400 cursor-pointer" />
        </div>
      </div>
      <p className="mt-4 text-lg ">
        Sample Tweet
      </p>
      <div className="mt-4">
        <Image src="/tweet.jpg" alt="Tweet img" width={500} height={400}  />
      </div>
      <div className="flex mt-4 text-gray-500">
        <div className="flex items-center mr-8">
          <FaRegComment className="mr-1" />
          <span>25</span>
        </div>
        <div className="flex items-center mr-8">
          <FaRetweet className="mr-1" />
          <span>22</span>
        </div>
        <div className="flex items-center mr-8">
          <BsHeart className="mr-1 text-red-500" />
          <span>30</span>
        </div>
        <div className="flex items-center">
          <IoAnalyticsOutline className="mr-1" />
          <span>Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
