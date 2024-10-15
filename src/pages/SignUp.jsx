import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from "../assets/full-length-portrait-smiling-woman.jpg";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // handle form
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative flex lg:flex-row h-screen justify-between ">
      <h1 className=" absolute left-[15%] lg:left-[10%] top-5 bg-yellow-50 px-4 rounded-md py-2 text-[#FFEB3B] font-bold text-4xl ">
        FreshMart
      </h1>

      <div className="  px-5 py-10 w-full lg:w-[50%] h-[70%] lg:h-[80%] my-auto ">
        <h1 className=" mt-10 border-b py-2 w-[60%] mx-auto  text-xl sm:text-4xl font-bold text-center ">Create Your Account</h1>

        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" my-auto h-auto lg:w-[70%] p-5 sm:p-8 rounded-md w-full sm:w-[80%] mx-auto flex flex-col gap-5  "
        >
          <label className=" flex flex-col gap-2 ">
            <span className=" text-xl font-semibold text-gray-400 ">
              User name
            </span>
            <input
              type="text"
              placeholder=" Ex: milon miah "
              {...register("userName", { required: "User name is required" })}
              className=" outline-none border placeholder:text-gray-400 placeholder:font-semibold focus:border-green-300 rounded-md px-4 py-2 "
            />
            {errors.userName && (
              <p className=" text-red-500 ">{errors.userName.message}</p>
            )}
          </label>
          <label className=" flex flex-col gap-2 ">
            <span className=" text-xl font-semibold text-gray-400 ">Email</span>
            <input
              type="email"
              placeholder=" Ex: milon.miah@qq.com "
              {...register("email", { required: "Email address is required" })}
              className=" outline-none border placeholder:text-gray-400 placeholder:font-semibold focus:border-green-300 rounded-md px-4 py-2 "
            />
            {errors.email && (
              <p className=" text-red-500 ">{errors.email.message}</p>
            )}
          </label>
          <div className=" relative flex flex-col gap-2 ">
            <span className=" text-xl font-semibold text-gray-400 ">
              Password
            </span>
            <label className=" w-full relative ">
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters long, include at least one letter, one number, and one special character",
                  },
                })}
                className=" w-full outline-none border placeholder:text-gray-400 placeholder:font-semibold focus:border-green-300 rounded-md px-4 py-2 "
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className=" absolute top-[28%] text-xl hover:cursor-pointer right-5 flex items-center "
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </label>
            {errors.password && (
              <p className=" text-red-500 ">{errors.password.message}</p>
            )}
          </div>

          <Button name="Sign up" />

          {/* sign up page link */}
          <div className=" flex items-center justify-between ">
            <p className=" text-xs sm:text-sm hover:text-green-500 font-semibold text-gray-500 hover:cursor-pointer hover:underline ">
              Forgot password
            </p>
            <span>
              ||
            </span>
            <p className=" text-xs sm:text-sm font-semibold ">
              <span className=" text-gray-500 ">Do not have an account?</span>{" "}
              <Link
                to="/"
                className=" ml-2 text-green-500 hover:cursor-pointer underline "
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* image section */}
      <div className=" hidden lg:block border-l w-[50%] h-screen ">
        <img
          src={img}
          alt="grocery image"
          className=" w-full h-full object-cover "
        />
      </div>
    </div>
  );
}
