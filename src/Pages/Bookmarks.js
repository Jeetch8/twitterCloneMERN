import React from "react";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoRepeatOutline } from "react-icons/io5";
import RightSideBar from "../Components/GlobalComponents/RightSideBar";
import SideNavBar from "../Components/GlobalComponents/SideNavBar";

const Bookmarks = () => {
  const arr = [12, 31, 23, 12, 3, 123, 1, 23];
  const images = [
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://i.pinimg.com/474x/a7/30/e0/a730e0dec7f98bc11e199d7b31f22f66.jpg",
  ];
  return (
    <div className="flex justify-center bg-black text-white">
      <SideNavBar />
      <div className="sticky top-0 w-[600px] border-x-[1px] border-gray-700 overflow-scroll scrollbar-hide h-[100vh]">
        <div className="flex justify-between px-[1vw] py-[1vh] items-center sticky top-0 bg-black backdrop-blur-lg">
          <div className="sticky top-0 leading-6">
            <h1 className="text-[20px] font-bold">Bookmarks</h1>
            <h2 className="text-[12px] text-zinc-500">@JeetChawda1</h2>
          </div>
          <FiMoreHorizontal className="text-[20px] backdrop-blur-xl" />
        </div>
        {/* All Tweets */}
        <div className="flex flex-col">
          {arr.map((item, index) => {
            return (
              <div
                className="flex items-start px-[1vw] py-[2vh] border-b-[1px] border-gray-600"
                key={index}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                  alt=""
                  className=" rounded-full h-[50px] w-[50px] mr-3"
                />
                <div className="flex flex-col">
                  <div className="flex  justify-between">
                    <div className="flex">
                      <h2 className="font-medium">Jeet Chawda </h2>
                      <h2 className="text-gray-500"> @JeetChawda1</h2>
                      <pre className="text-[10px]"> . </pre>
                      <h2 className="text-gray-500">16h</h2>
                    </div>
                    <FiMoreHorizontal />
                  </div>
                  <div>
                    If you were to host a new Node (not serverless) project
                    right now, where would you go?
                  </div>
                  <img
                    src={images[0]}
                    alt=""
                    className="rounded-lg max-w-[500px] my-3"
                  />
                  <div className="flex justify-between w-full pr-10 py-3">
                    <BiMessageRounded />
                    <IoRepeatOutline />
                    <AiOutlineHeart />
                    <AiOutlineUpload />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default Bookmarks;
