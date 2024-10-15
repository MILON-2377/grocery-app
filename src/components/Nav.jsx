import { Link, useLocation,} from "react-router-dom";
import navLinks from "../utils/constants";

// navbar navlinks

export default function Nav() {
  const location = useLocation();
  return (
    <div className=" hidden lg:block w-[25%] bg-gray-50 h-screen p-5 ">
      <h1 className=" text-3xl font-bold text-yellow-300  ">FreshMart</h1>
      <div className=" h-[1px] w-full bg-gray-300 mt-5 "></div>
      <div className=" mt-10 flex flex-col gap-2 ">
        {[...navLinks].map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={` ${location.pathname === item.path && " text-green-500 bg-green-100 font-semibold "}  text-green-400  hover:cursor-pointer transition-all duration-300 text-[17px]  px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 `}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
