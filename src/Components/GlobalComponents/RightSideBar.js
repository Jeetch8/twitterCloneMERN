import React from "react";
import { FiSearch } from "react-icons/fi";

const RightSideBar = () => {
  const arr = [123, 4, 23, 42];
  return (
    <div className="ml-[1.7vw] sticky top-0 text-white">
      <div className="bg-black sticky top-0 py-[1.5vh] z-50">
        <div className="bg-[#202327] flex items-center px-[1vw] py-[1.4vh] rounded-full font-light sticky top-0">
          <FiSearch />
          <input
            type="text"
            placeholder="Search Twitter"
            className=" bg-transparent pl-2 pr-[7vw] outline-none"
          />
        </div>
      </div>
      <div className="sticky top-0">
        <div className="pt-[1vh] pb-[2vh] px-[1vw] bg-[#202327] rounded-2xl mt-4">
          <h1 className="font-bold text-[21px]">What's happening</h1>
          {arr.map((item, index) => {
            return (
              <div className="flex mt-4" key={index}>
                <div className="flex flex-col w-[15vw]">
                  <div className="flex text-gray-500">
                    <h2 className="text-[12px]">Entertainment . </h2>
                    <h2 className="text-[12px]"> LIVE</h2>
                  </div>
                  <h1 className="font-medium text-[15px]">
                    The latest from Season 16 of Bigg Boss
                  </h1>
                </div>
                <img
                  src="https://pbs.twimg.com/semantic_core_img/1585990597197930496/fl4Fe0Tm?format=jpg&name=240x240"
                  alt=""
                  className="rounded-lg overflow-hidden h-[70px] w-[70px] object-cover ml-[10px]"
                />
              </div>
            );
          })}
        </div>
        <div className="bg-[#202327] px-[1vw] pt-[2vh] pb-[3vh] rounded-2xl mt-4 mb-8">
          <h1 className="text-[20px] font-bold mb-4">Who to follow</h1>
          {arr.map((item, index) => {
            return (
              <div className="flex mt-3" key={index}>
                <img
                  src="https://pbs.twimg.com/profile_images/1339957487135567873/LN3Zve77_400x400.jpg"
                  alt=""
                  className="h-[50px] w-[60px] rounded-full overflow-hidden"
                />
                <div className="flex items-center ml-3 justify-between w-full">
                  <div className="flex flex-col">
                    <h2 className="font-medium">JavaScript 101</h2>
                    <h2>@js_var</h2>
                  </div>
                  <button className="font-medium text-black bg-white px-[1vw] py-[0.5vh] rounded-full">
                    Follow
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col ml-4 pb-[10vh]">
          <div className="flex space-x-3 text-[13px] text-gray-500">
            <a href="/">Terms of Services</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
          </div>
          <div className="flex space-x-3 text-[13px] text-gray-500">
            <a href="/">Accessibilty</a>
            <a href="/">Ads Info</a>
            <a href="/">More ...</a>
          </div>
          <div className="text-[13px] text-gray-500">©2022 Twitter,Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
