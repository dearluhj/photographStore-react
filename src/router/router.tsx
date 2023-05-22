import Auth from "./isLoginAuthRouter";
import Login from "../pages/Login";
import Home from "../pages/Home";;


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
  }
];

export default element;
