import React from "react";
import { RiMailAddLine, RiSettings3Line } from "react-icons/ri";
import SideNavBar from "../Components/GlobalComponents/SideNavBar";
import { FiSearch } from "react-icons/fi";

const Messages = () => {
  const arr = [123, 123, 123, 12, 13, 12, 12, 3, 213, 123, 123];
  return (
    <div className="flex bg-black justify-center text-white sticky top-0">
      <SideNavBar />
      <div className="border-x-[1px] border-gray-600 w-[370px] sticky top-0">
        <div className="flex justify-between text-[20px] font-medium px-4 py-3 sticky top-0 bg-black">
          <h1>Messages</h1>
          <div className="flex space-x-4">
            <RiSettings3Line />
            <RiMailAddLine />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex border-[1px] border-gray-600 rounded-full justify-center items-center w-fit px-[5vw] py-[1vh] text-gray-600 m-auto">
            <FiSearch className="mr-1" />
            Search Direct Messages
          </div>
          <div className="flex flex-col w-[365px] scrollbar-hide overflow-scroll">
            {arr.map((item) => {
              return (
                <div className="flex items-center m-auto px-4 py-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                    alt=""
                    className=" rounded-full h-[40px] w-[40px] mr-3"
                  />
                  <div className="flex flex-col">
                    <div className="flex">
                      <h2 className="font-bold">Jeet Chawda </h2>
                      <h2 className="text-gray-500"> @JeetChawda1</h2>
                      <h2 className="text-gray-500"> .Nov4</h2>
                    </div>
                    <h2>be rest assured!</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[600px] flex justify-center items-center sticky top-0 h-[100vh]">
        <div className="">
          <h1 className="text-[28px] font-bold">Select a message</h1>
          <h2 className="w-[330px] text-gray-600 text-[15px]">
            Choose from your existing coversations,start a new one, or just keep
            swimming.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Messages;
