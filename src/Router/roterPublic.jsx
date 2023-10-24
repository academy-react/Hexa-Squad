import { createBrowserRouter } from "react-router-dom";

// @components

import Main from "../components/Layout/Main";
import UserPanel from "../components/Layout/UserPanel";

import Landing from "../screens/Landing/Landing";
import Login from "../screens/Authorize/Login";
import Register from "../screens/Authorize/Register";
import ForgetPassword from "../screens/Authorize/ForgetPassword";
import VerificationCode from "../screens/Authorize/VerificationCode";
import Error404 from "../screens/ErrorPage/Error404";
import Courses from "../screens/Courses/Courses";
import NewsList from "../screens/News/NewsList";
import NewsDetails from "../components/News/NewsDetails";
import CourseDetails from "../screens/CourseDetails/CourseDetails";
import AllCourse from "../screens/Panel/AllCourse";
import WhishList from "../screens/Panel/WhishList";
import MyCourses from "../screens/Panel/MyCourses";
import ChangePassword from "../screens/Panel/ChangePassword";
import TeacherProfile from "../components/TeacherProfile/TeacherProfile";

import EditProfile from "../screens/Panel/EditProfile";
import UserDashboard from "../screens/Panel/UserDashboard";
export const routerPublic = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/CourseDetails", element: <CourseDetails /> },
      { path: "/Courses", element: <Courses /> },
      { path: "/news", element: <NewsList /> },
      { path: "/NewsDetails", element: <NewsDetails /> },
      { path: "/CourseDetails", element: <CourseDetails /> },
      { path: "/TeacherProfile", element: <TeacherProfile /> },
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
  {
    path: "/userPanel",
    element: <UserPanel />,
    children: [
      { path: "/userPanel/AllCourses", element: <AllCourse /> },
      { path: "/userPanel/MyCourses", element: <MyCourses /> },
      { path: "/userPanel/WhishList", element: <WhishList /> },
      { path: "/userPanel/ChangePassword", element: <ChangePassword /> },
      { path: "/userPanel/editProfile", element: <EditProfile /> },
      { path: "/userPanel/", element: <UserDashboard /> },
    ],
  },
  { path: "/*", element: <Error404 /> },
]);
