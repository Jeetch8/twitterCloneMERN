import React, { useState } from "react";
import SideNavBar from "../Components/GlobalComponents/SideNavBar";
import RightSideNavBar from "../Components/GlobalComponents/RightSideBar";
import { IoLocationOutline, IoRepeatOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import EditProfileModal from "../Components/Profile/EditProfileModal";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";

const Profile = () => {
  const [tweetsToShow, setTweetToShow] = useState("allUserTweets");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const arr = [2, 42, 34, 23, 4, 2, 4, 23, 4, 23];
  function allTweets(tweetsType) {
    if (tweetsType === "likedTweets") {
      return (
        <div>
          <h1>Liked Tweet</h1>
        </div>
      );
    } else if (tweetsType === "tweetsAndReplies") {
      return (
        <div className="flex flex-col">
          {arr.map((item) => {
            return (
              // Two Tweets
              <div className="flex flex-col px-4 py-4 relative">
                {/* Single Tweet First */}
                <div className="flex items-start">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                    alt=""
                    className="w-[45px] h-[45px] rounded-full"
                  />
                  <div className="flex flex-col w-full ml-3">
                    <div className="flex justify-between w-full">
                      <h2 className="font-bold">
                        Jeet Chawda
                        <span className="font-light text-gray-500 ml-1">
                          @JeetChawda1
                        </span>{" "}
                        <span className="font-light text-gray-500 ml-1">
                          {" "}
                          . Oct28
                        </span>
                      </h2>
                      <FiMoreHorizontal />
                    </div>
                    <h2 className="text-[15px]">
                      What is the most common name in India?
                    </h2>
                    <div className="flex justify-between w-full pr-20 py-3 text-[18px]">
                      <BiMessageRounded />
                      <IoRepeatOutline />
                      <AiOutlineHeart />
                      <AiOutlineUpload />
                    </div>
                  </div>
                </div>
                {/* Second single tweet */}
                <div className="absolute border-l-[1px] border-gray-500 h-10 top-[8.2vh] left-[2.4vw]"></div>
                <div className="flex items-start">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                    alt=""
                    className="w-[45px] h-[45px] rounded-full"
                  />
                  <div className="flex flex-col w-full ml-3">
                    <div className="flex justify-between w-full">
                      <h2 className="font-bold">
                        Jeet Chawda
                        <span className="font-light text-gray-500 ml-1">
                          @JeetChawda1
                        </span>{" "}
                        <span className="font-light text-gray-500 ml-1">
                          {" "}
                          . Oct28
                        </span>
                      </h2>
                      <FiMoreHorizontal />
                    </div>
                    <h2 className="text-[15px]">
                      What is the most common name in India?
                    </h2>
                    <div className="flex justify-between w-full pr-20 py-3 text-[18px]">
                      <BiMessageRounded />
                      <IoRepeatOutline />
                      <AiOutlineHeart />
                      <AiOutlineUpload />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1>All tweets</h1>
          <h1>shjdasjd</h1>
        </div>
      );
    }
  }
  return (
    <div className="flex justify-center bg-black">
      <SideNavBar />
      <div className="w-[600px] border-x-[1px] border-gray-700 text-white sticky top-0">
        <div className="flex flex-col py-[1vh] px-[1vw] bg-black backdrop-blur-xl sticky top-0 z-50">
          <h2 className="font-bold text-[20px]">Jeet Chawda</h2>
          <h3 className="text-[14px] text-gray-500">30 Tweets</h3>
        </div>
        <div>
          <div className="relative">
            <div className="bg-[#333639] h-[26vh]"></div>
            <div className="p-1 absolute top-[17vh] left-4 bg-black rounded-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                alt=""
                className="w-[130px] h-[130px] rounded-full bg-slate-500"
              />
            </div>
            <div className="flex justify-end mb-[4vh]">
              <button
                className="border-[1px] border-gray-700 px-5 py-2 rounded-full mt-2 mr-4"
                onClick={() => setIsOpen(true)}
              >
                Edit Profile
              </button>
            </div>
            <div className="text-[15px] leading-9 pl-[1vw] pt-[1vh]">
              <div className="leading-[3vh]">
                <h1 className="text-[19px] font-bold">Jeet Chawda</h1>
                <h2 className="text-zinc-500">@JeetChawda1</h2>
              </div>
              <h2>Full stack || DevOps Developer</h2>
              <div className="flex space-x-5 text-zinc-500">
                <h2 className="flex items-center">
                  <IoLocationOutline />
                  Nagpur, India
                </h2>
                <h2 className="flex items-center">
                  <SlCalender className="mr-2" /> Joined May 2021
                </h2>
              </div>
              <div className="flex space-x-8 text-[14px]">
                <h2 className="font-bold">
                  13 <span className="font-light text-zinc-500">Following</span>
                </h2>
                <h2 className="font-bold">
                  37 <span className="font-light text-zinc-500">Followers</span>
                </h2>
              </div>
            </div>
            <div className="border-b-[1px] border-gray-700">
              <div className="flex font-medium">
                <h2
                  className={
                    tweetsToShow === "allUserTweets"
                      ? "px-[4.3vw] py-[2.2vh] cursor-pointer text-gray-500"
                      : "px-[4.3vw] py-[2.2vh] cursor-pointer text-gray-500 hover:bg-zinc-800 group duration-200"
                  }
                  onClick={() => setTweetToShow("allUserTweets")}
                >
                  <span
                    className={
                      tweetsToShow === "allUserTweets"
                        ? "border-b-[3px] rounded-sm pb-[2vh] border-blue-400"
                        : "group-hover:border-b-[3px] rounded-sm pb-[2vh] border-blue-400 duration-200"
                    }
                  >
                    Tweets
                  </span>
                </h2>
                <h2
                  className={
                    tweetsToShow === "tweetsAndReplies"
                      ? "px-[4.3vw] py-[2.2vh] cursor-pointer text-gray-500"
                      : "px-[4.3vw] py-[2.2vh] cursor-pointer text-gray-500 hover:bg-zinc-800 group duration-200"
                  }
                  onClick={() => setTweetToShow("tweetsAndReplies")}
                >
                  <span
                    className={
                      tweetsToShow === "tweetsAndReplies"
                        ? "border-b-[3px] rounded-sm pb-[2vh] border-blue-400"
                        : "group-hover:border-b-[3px] rounded-sm pb-[2vh] border-blue-400 duration-200"
                    }
                  >
                    Tweets & replies
                  </span>
                </h2>
                <h2
                  className={
                    tweetsToShow === "likedTweets"
                      ? "px-[4.2vw] py-[2.2vh] cursor-pointer text-gray-500"
                      : "px-[4.2vw] py-[2.2vh] cursor-pointer text-gray-500 hover:bg-zinc-800 group duration-200"
                  }
                  onClick={() => setTweetToShow("likedTweets")}
                >
                  <span
                    className={
                      tweetsToShow === "likedTweets"
                        ? "border-b-[3px] rounded-sm pb-[2vh] border-blue-400"
                        : "group-hover:border-b-[3px] rounded-sm pb-[2vh] border-blue-400 duration-200"
                    }
                  >
                    Likes
                  </span>
                </h2>
              </div>
            </div>
            <div className="text-white">{allTweets(tweetsToShow)}</div>
          </div>
        </div>
      </div>
      <RightSideNavBar />
      <EditProfileModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Profile;
