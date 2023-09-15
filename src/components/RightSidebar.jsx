import React from "react";
import { BsSearch } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <section className="w-[25%] fixed hidden lg:block top-2 right-0  p-2 bg-black">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text "
            placeholder="Search Twitter"
            className="outline-none peer focus:border-blue-500  w-full h-full rounded-[999px] py-3 pl-12 pr-4 "style={{backgroundColor: "#22303c",color: "white" }}
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-blue-500 peer-focus:text-primary"style={{ color: "white" }}
          >
            <BsSearch className="w-5 h-5" color="#6B7280"/>
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl my-4  "style={{ backgroundColor: "#22303c" }}>
        <h3 className="font-bold text-l my-4 px-4" style={{ color: "white" }}>What’s happening</h3>
        <div>
          
            <div className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"style={{ color: "white" }}>
            
              <div className="font-bold text-l  "style={{ color: "white",lineHeight: "1.5"  }}>#Iphone15</div>
              <div className="text-xs text-neutral-400"style={{ color: "#3B82F6",lineHeight: "1.5"  }}>35.4k</div>
              </div>
              <div className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200">
              <div className="font-bold text-l  "style={{ color: "white",lineHeight: "1.5"  }}>#G20Submit</div>
              <div className="text-xs text-neutral-400"style={{ color: "#3B82F6",lineHeight: "1.5"  }}>35.4k</div>
              </div>
              <div className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200">
              <div className="font-bold text-l  "style={{ color: "white",lineHeight: "1.5"  }}>#IndvsSL</div>
              <div className="text-xs text-neutral-400"style={{ color: "#3B82F6",lineHeight: "1.5"  }}>35.4k</div>
            </div>
          
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
