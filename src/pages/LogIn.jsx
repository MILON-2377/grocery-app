import { useState } from "react";
import logImg from "../assets/full-length-portrait-smiling-woman.jpg";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

export default function LogIn() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row p-5 lg:p-0  ">
      <h1 className=" lg:hidden text-3xl font-bold text-yellow-300 ">
        FreshMart
      </h1>

      <div className=" sm:mt-32 mt-10 lg:mt-0 w-full lg:w-[50vw] h-full">
        <h1 className=" hidden lg:block p-5 text-center text-3xl font-bold text-yellow-300 ">
          FreshMart
        </h1>

        <h1 className=" sm:block lg:hidden hidden text-xl sm:text-2xl font-bold text-green-500 text-center ">
          Log In to Your Grocery Account
        </h1>

        {/* form */}
        <div className=" mt-10 lg:mt-0 h-full border lg:border-none rounded-md flex sm:flex-row lg:flex-col-reverse flex-col-reverse  justify-between">
          <form className="  h-full lg:w-[65%] lg:mx-auto p-5 rounded-md w-full sm:w-[80%] mx-auto flex flex-col gap-5  ">
            <label className=" flex flex-col gap-2 ">
              <span className=" text-xl font-semibold text-gray-400 ">
                User Name
              </span>
              <input
                type="email"
                placeholder=" Ex: username/email "
                className=" outline-none border placeholder:text-gray-400 placeholder:font-semibold focus:border-green-300 rounded-md px-4 py-2 "
              />
            </label>
            <label className=" relative flex flex-col gap-2 ">
              <span className=" text-xl font-semibold text-gray-400 ">
                Password
              </span>
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Password"
                className=" outline-none border placeholder:text-gray-400 placeholder:font-semibold focus:border-green-300 rounded-md px-4 py-2 "
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className=" absolute top-[62%] text-xl hover:cursor-pointer right-5 flex items-center "
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </label>

            <Button name="LogIn" />

            {/* sign up page link */}
            <div className=" flex items-center justify-between ">
              <p className=" text-xs lg:text-[16px] sm:text-sm font-semibold text-gray-500 hover:cursor-pointer hover:underline ">
                Forgot password
              </p>
              <p className=" text-xs lg:text-[16px] sm:text-sm font-semibold ">
                <span className=" text-gray-500 ">Do not have an account?</span>
                <Link
                  to="/signup"
                  className=" ml-2 text-green-500 hover:cursor-pointer underline "
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>

          <div className=" sm:w-[1px] w-[90%] mx-auto h-[1px] sm:h-[35vh] lg:h-[1px] lg:w-[60%] my-auto bg-gray-200 "></div>

          {/* social login section */}
          <div className=" w-full sm:w-[50%] lg:w-[65%] lg:mx-auto px-5 py-10 flex flex-col gap-5 ">
            <h1 className="text-xl lg:text-4xl border-b py-5 font-semibold text-sky-500  text-center">
              Login with Social Media
            </h1>

            <button className=" lg:mt-5 flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-800 text-xl rounded-md py-2 px-4 w-full hover:bg-gray-100 transition duration-200 ease-in-out">
              <FaGoogle className="text-red-500" />
              <span>Sign in with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-blue-500 bg-blue-600 text-white text-xl rounded-md py-2 px-4 w-full hover:bg-blue-700 transition duration-200 ease-in-out">
              <FaFacebook className="text-xl" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>

      {/* image  */}
      <div className=" border-l hidden lg:block w-[50vw] h-[100vh] ">
        <img
          src={logImg}
          alt="grocery image"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
}
