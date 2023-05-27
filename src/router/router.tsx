import Auth from "./isLoginAuthRouter";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Notfound = lazy(() => import("../pages/Notfound"));
const PicturesList = lazy(() => import("../components/picturesList"));
const Homeindex = lazy(() => import("../components/homeindex"));
const Picturedetail = lazy(() => import("../components/picturedetail"));

//需要做登录授权的页面用Auth组件传入element
let element = [
  {
    path: "/",
    element: (
      <Auth>
        <Home />
      </Auth>
    )
  },
  {
    path: "/home",
    element: (
      <Auth>
        <Home />
      </Auth>
    ),
    children: [
      {
        path: "styles/:gid",
        element: <PicturesList />
      },
      {
        path: "detail/:pid",
        element: <Picturedetail />
      },
      {
        path: "",
        element: <Homeindex />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <Notfound />
  }
];

export default element;
