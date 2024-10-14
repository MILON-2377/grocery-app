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
    <div className="flex flex-col lg:flex-row p-5 ">
      {/* form section */}
      <div className=" mt-10 w-full lg:w-[50vw] h-full">
        <h1 className=" text-2xl sm:text-4xl font-bold text-yellow-300 text-center ">
          Log In to Your Grocery Account
        </h1>

        {/* form */}
        <div className=" mt-10 h-full border rounded-md flex sm:flex-row flex-col-reverse  justify-between">
          <form className=" h-full lg:border p-5 rounded-md w-full sm:w-[80%] mx-auto flex flex-col gap-5  ">
            <label className=" flex flex-col gap-2 ">
              <span className=" text-xl font-semibold text-gray-400 ">
                User Name
              </span>
              <input
                type="text"
                placeholder=" Ex: milon "
                className=" outline-none border placeholder:text-gray-400 placeholder:font-semibold focus:border-green-300 rounded-md px-4 py-2 "
              />
            </label>
            <label className=" flex flex-col gap-2 ">
              <span className=" text-xl font-semibold text-gray-400 ">
                Email
              </span>
              <input
                type="email"
                placeholder=" Ex: milon.miah@qq.com "
                className=" outline-none border placeholder:text-gray-400 placeholder:font-semibold focus:border-green-300 rounded-md px-4 py-2 "
              />
            </label>
            <label className=" relative flex flex-col gap-2 ">
              <span className=" text-xl font-semibold text-gray-400 ">
                User Name
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
              <p className=" text-xs sm:text-sm font-semibold text-gray-500 hover:cursor-pointer hover:underline ">
                Forgot password
              </p>
              <p className=" text-xs sm:text-sm font-semibold ">
                <span className=" text-sm text-gray-500 ">
                  Do not have an account?
                </span>{" "}
                <Link className=" ml-2 text-green-500 hover:cursor-pointer underline ">
                  Sign up
                </Link>
              </p>
            </div>
          </form>

          <div className=" sm:w-[1px] w-[90%] mx-auto h-[1px] sm:h-[45vh] my-auto bg-gray-200 "></div>

          {/* social login section */}
          <div className=" w-full sm:w-[50%] px-5 py-10 flex flex-col gap-5 ">
            <h1 className="text-xl font-semibold text-sky-500  text-center">
              Login with Social Media
            </h1>

            <button className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-800 text-xl rounded-md py-2 px-4 w-full hover:bg-gray-100 transition duration-200 ease-in-out">
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
      <div className=" hidden w-[50vw] h-[100vh] ">
        <img
          src={logImg}
          alt="grocery image"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
}
