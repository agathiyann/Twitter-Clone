"use client";
import Feed from "@/components/Feed";
import TweetBox from "@/components/TweetBox";

const Page = () => {
  return (
    <div className="sm:w-[50%] w-[80%] absolute right-0 sm:relative  sm:m-auto md:border-r-2 bg-black">
      <div className="p-4">
        <h3 className="text-[18px] font-bold " style={{ color: "white" }}>Home</h3>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Tweet box end */}
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
  );
};

export default Page;
