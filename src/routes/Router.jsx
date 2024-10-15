import { createBrowserRouter } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path:'/',
    element: <LogIn />,
  },
  {
    path:'/signup',
    element: <SignUp />,
  },
  {
    path:"/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />
      },
      {
        path: "/dashboard/settings",
        element: <Settings />
      },
      {
        path: "/dashboard/dashboard",
        element: <Dashboard />
      },
    ],
  }
])

export default router;
