import React from "react";
import SideNavBar from "../Components/GlobalComponents/SideNavBar";
import CenterBlock from "../Components/Home/CenterBlock";
import RightSideBar from "../Components/GlobalComponents/RightSideBar";

const Home = () => {
  return (
    <div className="bg-black text-white flex justify-center">
      <SideNavBar />
      <CenterBlock />
      <RightSideBar />
    </div>
  );
};

export default Home;
