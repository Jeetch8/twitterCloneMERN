import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiNotification3Line, RiUserFill } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { RiHome7Fill, RiNotification3Fill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const SideNavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <div className="flex flex-col text-white bg-black justify-between h-[100vh] pr-5 sticky top-0">
      <div className="flex flex-col text-[21px] font-medium items-start mt-[2vh]">
        <FaTwitter
          className="text-[32px] ml-3 mb-3 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div
          className="flex items-center my-1 hover:bg-[#181818] rounded-full py-2 px-3 cursor-pointer mt-[2vh]"
          onClick={() => navigate("/")}
        >
          {location === "/" ? (
            <RiHome7Fill className="mr-2 text-[28px]" />
          ) : (
            <BiHomeCircle className="mr-2 text-[28px]" />
          )}
          Home
        </div>
        <div
          className="flex items-center my-1 hover:bg-[#181818] rounded-full py-2 px-3 cursor-pointer mt-[2vh]"
          onClick={() => {
            navigate("/notifications");
          }}
        >
          {location === "/notifications" ? (
            <RiNotification3Fill className="mr-2 text-[28px]" />
          ) : (
            <RiNotification3Line className="mr-2 text-[28px]" />
          )}
          Notifications
        </div>
        <div
          className="flex items-center my-1 hover:bg-[#181818] rounded-full py-2 px-3 cursor-pointer mt-[2vh]"
          onClick={() => navigate("/messages")}
        >
          {location === "/messages" ? (
            <HiMail className="mr-2 text-[28px]" />
          ) : (
            <HiOutlineMail className="mr-2 text-[28px]" />
          )}
          Messages
        </div>
        <div
          className="flex items-center my-1 hover:bg-[#181818] rounded-full py-2 px-3 cursor-pointer mt-[2vh]"
          onClick={() => navigate("/bookmarks")}
        >
          {location === "/bookmarks" ? (
            <BsBookmarkFill className="mr-2 text-[28px]" />
          ) : (
            <BsBookmark className="mr-2 text-[28px]" />
          )}
          Bookmarks
        </div>
        <div
          className="flex items-center my-1 hover:bg-[#181818] rounded-full py-2 px-3 cursor-pointer mt-[2vh]"
          onClick={() => navigate("/profile")}
        >
          {location === "/profile" ? (
            <RiUserFill className="mr-2 text-[28px]" />
          ) : (
            <AiOutlineUser className="mr-2 text-[28px]" />
          )}{" "}
          Profile
        </div>
        <button
          className="bg-[#1D9BF0] w-fit text-[17px] font-medium px-[6vw] rounded-full py-[1.5vh] mt-[4vh]"
          onClick={() => navigate("/asdas")}
        >
          Tweet
        </button>
      </div>
      <div className="flex items-center mb-[3vh]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          alt=""
          className=" rounded-full h-[40px] w-[40px] mr-3"
        />
        <div className="leading-[2.5vh]">
          <h2 className="font-medium">Jeet Chawda</h2>
          <h2 className=" text-gray-400">@JeetChawda1</h2>
        </div>
        <div className="relative">
          {/* DropDown */}
          {dropDown && (
            <div className="absolute top-[-11vh] right-0 flex flex-col border-[1px] border-white rounded-lg bg-black">
              <h2 className="cursor-pointer hover:bg-zinc-800 pl-4 pr-10 py-2 rounded-lg">
                Profile
              </h2>
              <h2 className="cursor-pointer hover:bg-zinc-800 pl-4 pr-10 py-2 rounded-lg">
                Logout
              </h2>
            </div>
          )}
          <MdMoreHoriz
            className={
              dropDown
                ? "bg-gray-600 rounded-full text-[25px] ml-16 cursor-pointer"
                : "text-[25px] ml-16 hover:bg-gray-600 rounded-full cursor-pointer"
            }
            onClick={() => setDropDown(!dropDown)}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
