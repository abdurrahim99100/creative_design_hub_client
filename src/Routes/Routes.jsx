import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Payment from "../pages/Dashboard/Payment/Payment";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <>error elements</>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>,
        loader: () => fetch('http://localhost:5000/instructors')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);