import Auth from "./isLoginAuthRouter";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";

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
    )
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
