import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import {BiSmile} from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  return (
    <div className="w-full h-auto border-t border-b border-gray-200 bg-black">
      <div className="flex p-3">
        <div className="w-[10%]">
          <div className="w-11 h-11 p-2 text-[18px] bg-slate-400 rounded-full text-center bg-black">
          A
          </div>
        </div>
        <div className="w-[85%] ml-2 sm:ml-0">
          <div>
            <textarea
              placeholder="What's happening?"
              value={tweet}
              onChange={handleTweetChange}
              rows={5}
              className="w-full p-2 outline-none resize-none border-b border-gray-300 focus:border-blue-400 bg-black"
              maxLength={280}
              style={{ color: 'white' }}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-x-6 text-blue-500">
              <AiOutlinePicture className="cursor-pointer" />
              <MdOutlineGifBox className="cursor-pointer" />
              <BiSmile className="cursor-pointer" />
              <FiSettings className="cursor-pointer" />
            </div>
            <div>
            <button
  className={`px-6 py-2 rounded-full text-white ${
    tweet? "bg-blue-500 hover:bg-blue-600" : "bg-blue-200 cursor-not-allowed"
  }`}
  onClick={() => console.log(tweet)}
  disabled={!tweet}
>
  Tweet
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;