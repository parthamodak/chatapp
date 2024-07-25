import React, { useState } from "react";
import SignupImage from "../assets/Signup.jpeg";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Signup = () => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passerr, setPasserr] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);

  let handlemail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handlename = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handlepass = (e) => {
    setPass(e.target.value);
    setPasserr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid Email");
    }

    if (!name) {
      setNameerr("Name is required");
    }
    if (!pass) {
      setPasserr("Password is required");
    }
  };

  return (
    <div>
      <div className="flex  h-screen font-nunito">
        <div className="w-1/2 h-full relative">
          <div className="h-full flex flex-col justify-center absolute left-[50%] translate-x-[-50%]">
            <h1 className="text-[30px] font-bold text-secondary mb-3 max-w-[435px]">
              Get started with easily register
            </h1>
            <p className="mb-[30px] text-[20px]">
              Free register and you can enjoy it
            </p>
            <div className="relative mt-4">
              <input
                onChange={handlemail}
                className={`pl-8 w-[365px] h-[50px] border-[1px] ${
                  emailerr ? "border-red-500" : " border-secondary"
                }  rounded-lg`}
                type="text"
                placeholder="Enter you email"
                value={email}
              />
              {emailerr && <p className="text-red-700">{emailerr}</p>}

              <label
                className={`absolute top-[-9px] left-5 ${
                  emailerr ? "text-red-500" : "text-secondary"
                } bg-white px-3 text-[13px]`}
              >
                Email Adress
              </label>
            </div>
            <div className="relative mt-10">
              <input
                onChange={handlename}
                className={`pl-8 w-[365px] h-[50px] border-[1px] ${
                  nameerr ? "border-red-500" : " border-secondary"
                }  rounded-lg`}
                type="text"
                placeholder="Enter you name"
              />
              {nameerr && <p className="text-red-700">{nameerr}</p>}
              <p
                className={`absolute top-[-9px] left-5 ${
                  nameerr ? "text-red-500" : "text-secondary"
                } bg-white px-3 text-[13px]`}
              >
                Full Name
              </p>
            </div>
            <div className="relative mt-10">
              {passwordshow ? (
                <IoIosEye
                  onClick={() => setPasswordshow(false)}
                  className=" absolute top-2/4 translate-y-[-50%] right-5 text-2xl cursor-pointer"
                />
              ) : (
                <IoIosEyeOff
                  onClick={() => setPasswordshow(true)}
                  className=" absolute top-2/4 translate-y-[-50%] right-5 text-2xl cursor-pointer"
                />
              )}

              <input
                onChange={handlepass}
                className={`pl-8 w-[365px] h-[50px] border-[1px] ${
                  passerr ? "border-red-500" : " border-secondary"
                }  rounded-lg`}
                type={passwordshow ? "text" : "password"}
                placeholder="Enter your password"
              />

              {passerr && <p className="text-red-700">{passerr}</p>}
              <p
                className={`absolute top-[-9px] left-5 ${
                  passerr ? "text-red-500" : "text-secondary"
                } bg-white px-3 text-[13px]`}
              >
                Password
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="text-5 text-white font-semibold w-[365px] bg-primary py-3 mt-5 rounded-lg"
            >
              Sign Up
            </button>
            <p className="text-center mt-5 ">
              Already Have an Account ?
              <Link
                to="/login"
                className="text-yellow-600 font-nunito cursor-pointer ml-1"
              >
                login
              </Link>
            </p>
          </div>
        </div>
        <div className=" w-1/2 h-full">
          <img
            className="h-full w-full object-cover"
            src={SignupImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
