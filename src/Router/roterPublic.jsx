import {createBrowserRouter} from 'react-router-dom'

// @components

import Layout from "../components/Layout/Layout";
import Landing from "../screens/Landing/Landing";
import Login from "../screens/Authorize/Login";
import Register from "../screens/Authorize/Register";
import ForgetPassword from "../screens/Authorize/ForgetPassword";
import VerificationCode from "../screens/Authorize/VerificationCode";
import Error404 from "../screens/ErrorPage/Error404";
import CourseDetails from "../screens/CourseDetails/CourseDetails";
import Courses from '../screens/Courses/Courses';

export const routerPublic = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/CourseDetails", element: <CourseDetails/> },
        { path: "/Courses", element: <Courses/> }
      ],
    },
    {
      path: "/authorize",
      children: [
        { path: "/authorize/login", element: <Login /> },
        { path: "/authorize/register", element: <Register /> },
        { path: "/authorize/forget", element: <ForgetPassword /> },
        { path: "/authorize/Verification", element: <VerificationCode /> },
      ],
    },
    { path: "/*", element: <Error404 /> },
]);