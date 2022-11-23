import React from "react";
import { BsStars } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { IoRepeatOutline } from "react-icons/io5";
import { AiOutlineUpload, AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const CenterBlock = () => {
  const arr = [1, 324, 4, 23, 4, 23, 4];
  const images = [
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://i.pinimg.com/474x/a7/30/e0/a730e0dec7f98bc11e199d7b31f22f66.jpg",
  ];
  return (
    <div className="sticky top-0  w-[600px] border-x-[1px] border-gray-600 overflow-y-scroll scrollbar-hide h-[100vh]">
      <div className="flex items-center w-[598px] justify-between py-[2vh] px-[1vw] backdrop-blur-2xl sticky top-0">
        <div className="font-medium text-[19px]">Home</div>
        <BsStars className="text-[20px]" />
      </div>
      {/* Create New Tweet */}
      <div className="px-[1vw] flex items-start border-b-[1px] border-gray-600">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          alt=""
          className=" rounded-full h-[50px] w-[50px] mr-3"
        />
        <div className="flex flex-col">
          <textarea
            name=""
            id=""
            cols="47"
            rows="3"
            className=" bg-transparent text-[20px] p-[1vh] outline-none"
            placeholder="What's happening..."
          ></textarea>
          <div className="flex justify-between my-2 items-center border-t-[1px] border-gray-600 py-2 pl-[1vw]">
            <div className="flex my-2 items-center">
              <IoImageOutline className="text-[20px]" />
            </div>
            <button className="bg-[#1D9BF0] px-[1.1vw] py-[0.5vh] rounded-full font-medium">
              Tweet
            </button>
          </div>
        </div>
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
                  If you were to host a new Node (not serverless) project right
                  now, where would you go?
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
  );
};

export default CenterBlock;
