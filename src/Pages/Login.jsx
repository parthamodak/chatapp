import React, { useState } from "react";
import SignupImage from "../assets/Signup.jpeg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailerror, setEmailerror] = useState("");
  let [passworderror, setPassworderror] = useState("");
  let [passwordShow, setPasswordShow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderror("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerror("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerror("Invalid Email");
    }

    if (!password) {
      setPassworderror("Password is required");
    }
  };

  // let handlePasswordShow = () => {};

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[69px]">
          <h1 className="text-[34px] font-bold text-secondary">
            Login To Your Account
          </h1>

          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                emailerror ? "text-red-500" : "text-secondary"
              } absolute top-[-9px] left-[50px] bg-white px-2`}
            >
              Email Adress
            </label>
            <input
              onChange={handleEmail}
              className={`w-full h-full border-b ${
                emailerror ? "border-red-500" : "border-secondary/50"
              } rounded-2xl pl-[50px] `}
              type="email"
              value={email}
              placeholder=" Enter your Email Adress"
            />
            {emailerror && (
              <p className=" text-red-500 text-xm font-nunito">{emailerror}</p>
            )}
          </div>

          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                passworderror ? "text-red-500" : "text-secondary"
              } absolute top-[-9px] left-[50px] bg-white px-2`}
            >
              {""} Password
            </label>
            <input
              onChange={handlePassword}
              className={`w-full h-full border-b ${
                passworderror ? "border-red-500" : "border-secondary/50"
              } rounded-2xl pl-[50px]`}
              type={passwordShow ? "text" : "password"}
              value={password}
              placeholder="Enter your Password"
            />
            {passwordShow ? (
              <FaEye
                onClick={() => setPasswordShow(false)}
                className=" text-2xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordShow(true)}
                className=" text-2xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer"
              />
            )}

            {passworderror && (
              <p className=" text-red-500 text-xm font-nunito">
                {passworderror}
              </p>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-primary w-[368px] py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px] "
          >
            Sign In
          </button>

          <p className="text-sm text-secondary text-center w-[368px] mt-[35px]">
            Do not have any account?{""}
            <Link to="/signup" className="text-[#EA6C00] font-bold ">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-2/4 h-full ">
        <img
          className="w-full h-full object-cover"
          src={SignupImage}
          alt="SignupImage"
        />
      </div>
    </div>
  );
};

export default Login;
