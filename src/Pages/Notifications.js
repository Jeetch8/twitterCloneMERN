import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import RightSideBar from "../Components/GlobalComponents/RightSideBar";
import SideNavBar from "../Components/GlobalComponents/SideNavBar";

const Notifications = () => {
  const arr = [132, 42, 3, 23, 4, 23, 4, 23, 234, 23, 42, 3, 42, 34, 23, 4];
  return (
    <div className="flex justify-center bg-black text-white">
      <SideNavBar />
      <div className="border-x-[1px] border-gray-800 w-[600px] sticky top-0">
        <div className="px-[1vw] py-[1vh] backdrop-blur-2xl sticky top-0">
          <h1 className="text-[20px] font-bold">Notifications</h1>
        </div>
        <div className="flex flex-col">
          {arr.map((item) => {
            return (
              <div className="text-[15px] flex px-8 py-4 border-y-[1px] border-gray-800">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                  alt=""
                  className=" rounded-full h-[40px] w-[40px] mr-3"
                />
                <div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <h2 className="font-medium">Jeet Chawda</h2>
                      <h2 className="text-gray-600">@JeetChawda1</h2>
                      <h2>. Oct 29</h2>
                    </div>
                    <FiMoreHorizontal />
                  </div>
                  <div>
                    True buddy I am a full stack web developer and i find
                    frontend part difficult.
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

export default Notifications;
