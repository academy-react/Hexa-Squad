import { createBrowserRouter } from "react-router-dom";

// @components

import Main from "../components/Layout/Main";
import UserPanel from "../components/Layout/UserPanel";

import Landing from "../screens/Landing/Landing";

// Authorize components
import Login from "../screens/Authorize/Login";
import Register from "../screens/Authorize/Register";
import VerificationSteps from "../screens/Authorize/VerificationSteps";

import Error404 from "../screens/ErrorPage/Error404";
import Courses from "../screens/Courses/Courses";
import NewsList from "../screens/News/NewsList";
import NewsDetails from "../screens/NewsDetails/NewsDetails";
import CourseDetails from "../screens/CourseDetails/CourseDetails";
import TeacherProfile from "../components/TeacherProfile/TeacherProfile";
// panel components
import AllCourse from "../screens/Panel/AllCourse";
import WhishList from "../screens/Panel/WhishList";
import MyCourses from "../screens/Panel/MyCourses";
import LogOut from "../screens/Panel/logOut";
import ChangePassword from "../components/UserPanel/EditProfile/ChangePassword";
import UserDashboard from "../screens/Panel/UserDashboard";
import ProfileInfoTabs from "../screens/Panel/ProfileInfoTabs";
import NewsFavorite from "../screens/Panel/NewsFavorite";
import MyCoursesReserve from "../screens/Panel/myCoursesReserve";
export const routerPublic = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "/CourseDetails",
        element: <CourseDetails />,
        children: [{ path: "/CourseDetails/:id", element: <CourseDetails /> }],
      },
      { path: "/Courses", element: <Courses /> },
      { path: "/news", element: <NewsList /> },
      {
        path: "/NewsDetails",
        element: <NewsDetails />,
        children: [{ path: "/NewsDetails/:id", element: <NewsDetails /> }],
      },
      { path: "/CourseDetails", element: <CourseDetails /> },
      {
        path: "/TeacherProfile",
        element: <TeacherProfile />,
        children: [
          { path: "/TeacherProfile/:id", element: <TeacherProfile /> },
        ],
      },
    ],
  },
  {
    path: "/authorize",
    children: [
      { path: "/authorize/login", element: <Login /> },
      { path: "/authorize/register", element: <Register /> },
      {
        path: "/authorize/Verification",
        element: <VerificationSteps />,
        children: [
          {
            path: "/authorize/Verification/:step",
            element: <VerificationSteps />,
            children: [
              {
                path: "/authorize/Verification/:step/:config",
                element: <VerificationSteps />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/userPanel",
    element: <UserPanel />,
    children: [
      { path: "/userPanel/", element: <UserDashboard /> },
      { path: "/userPanel/AllCourses", element: <AllCourse /> },
      { path: "/userPanel/MyCourses", element: <MyCourses /> },
      { path: "/userPanel/WhishList", element: <WhishList /> },
      { path: "/userPanel/NewsFavorite", element: <NewsFavorite /> },
      { path: "/userPanel/ChangePassword", element: <ChangePassword /> },
      { path: "/userPanel/myCoursesReserve", element: <MyCoursesReserve /> },
      // { path: "/userPanel/editProfile", element: <EditProfile /> },
      { path: "/userPanel/logOut", element: <LogOut /> },
      { path: "/userPanel/ProfileInfoTabs", element: <ProfileInfoTabs /> },
    ],
  },
  { path: "/*", element: <Error404 /> },
]);
