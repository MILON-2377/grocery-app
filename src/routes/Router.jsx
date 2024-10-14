import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path:'/',
    element: <LogIn />,
  },
  {
    path:'/singup',
    element: <SignUp />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />
  }
]);

export default router;
