import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { GrTwitter } from "react-icons/gr";
import DatePicker from "react-date-picker";

const LoginRegister = () => {
  const [contentDisp, seTContentDisp] = useState("initial");
  const navigate = useNavigate();
  const [dobValue, setDobValue] = useState(new Date());
  // const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const handeleFormDtata = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const loginHandler = () => {
    axios
      .post("http://localhost:5000/api/v1/auth/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) =>
        res.data.success
          ? loginSuccessHandler(res)
          : toast({
              title: "Something went wrong",
              status: "error",
              position: "top",
            })
      );
  };

  const loginSuccessHandler = async (res) => {
    await localStorage.setItem("token", res.data.token);
    await localStorage.setItem("name", res.data.name);
    await localStorage.setItem("userId", res.data.userId);
    navigate("/home");
  };

  function toDisplayFunction() {
    if (contentDisp === "initial") {
      return (
        <div className="h-[100vh] w-[50vw] flex justify-center flex-col pl-4">
          <GrTwitter className="fill-[#1D9BF0] text-[60px]" />
          <h1 className="text-[60px] font-bold">Happening now</h1>
          <h2 className="text-[30px] font-medium">Join twitter today.</h2>
          <div>
            <button
              className="bg-[#1D9BF0] border-[1px] rounded-full text-white font-medium text-[18px] px-[7vw] py-[1vh] mt-4"
              onClick={() => seTContentDisp("register")}
            >
              Sign up
            </button>
            <br />
            <button
              className="border-[#1D9BF0] border-[1px] rounded-full text-[#1D9BF0] font-medium text-[18px] px-[7.5vw] py-[1vh] mt-2"
              onClick={() => seTContentDisp("login")}
            >
              Login
            </button>
          </div>
        </div>
      );
    } else if (contentDisp === "login") {
      return (
        <div className="h-[100vh] w-[50vw] flex items-center pl-10">
          <div className="flex flex-col space-y-5">
            <GrTwitter className="fill-[#1D9BF0] text-[60px]" />
            <h1 className="text-[28px] font-bold">Log in to Twitter</h1>
            <input
              type="text"
              placeholder="Phone,email or username"
              className="border-2 border-[#1D9BF0] pl-2 pr-[7vw] rounded-md py-2"
            />
            <input
              type="text"
              placeholder="Password"
              className="border-2 border-[#1D9BF0] pl-2 pr-[7vw] rounded-md py-2"
            />
            <button className="bg-[#1D9BF0] text-white font-bold rounded-full py-2">
              Log in
            </button>
            <div className="flex justify-between text-[15px] pt-8">
              <h3 className="text-[#1D9BF0] cursor-pointer">
                Forgot password?
              </h3>
              <h3
                href="/"
                className="text-[#1D9BF0] cursor-pointer"
                onClick={() => seTContentDisp("register")}
              >
                Sign up for Twitter
              </h3>
            </div>
          </div>
        </div>
      );
    } else if (contentDisp === "register") {
      return (
        <div className="h-[100vh] w-[50vw] flex items-center pl-10">
          <div className="flex flex-col space-y-5">
            <GrTwitter className="fill-[#1D9BF0] text-[60px]" />
            <h1 className="text-[32px] font-bold mt-4">Join Twitter Today.</h1>
            <input
              type="text"
              placeholder="Full name"
              className="border-2 border-[#1D9BF0] pl-2 pr-[7vw] rounded-md py-2"
            />
            <input
              type="text"
              placeholder="Phone or email"
              className="border-2 border-[#1D9BF0] pl-2 pr-[7vw] rounded-md py-2"
            />
            <input
              type="text"
              placeholder="Password"
              className="border-2 border-[#1D9BF0] pl-2 pr-[7vw] rounded-md py-2"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="border-2 border-[#1D9BF0] pl-2 pr-[7vw] rounded-md py-2"
            />
            <div className="flex">
              <h2 className="font-medium mr-2">Date of Birth:</h2>
              <DatePicker
                onChange={setDobValue}
                value={dobValue}
                dayPlaceholder="---"
                yearPlaceholder="---"
                monthPlaceholder="---"
              />
            </div>
            <button className="bg-[#1D9BF0] text-white font-bold rounded-full py-2">
              Sign up
            </button>
            <h3
              className="text-[#1D9BF0] text-[15px] font-medium pt-6 cursor-pointer"
              onClick={() => seTContentDisp("login")}
            >
              Already have an account?
            </h3>
          </div>
          <ToastContainer />
        </div>
      );
    }
  }

  return (
    <div className="flex">
      <div className="bg-[url(https://images.squarespace-cdn.com/content/v1/52d9d72ee4b03d314574e224/22ac9288-818f-443f-b2c6-98cad303aa42/Twitter%402x.jpg)] w-[50vw] h-[100vh] bg-contain"></div>
      {toDisplayFunction()}
    </div>
  );
};
export default LoginRegister;
