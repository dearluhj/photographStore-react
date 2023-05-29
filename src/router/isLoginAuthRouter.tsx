import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { setUsername } from "../store/redux/appstore";
import { useAppDispatch } from "../store/redux/hooks";

type Props = {
  children: JSX.Element;
};
export default function IsLoginAuthRouter({ children }: Props) {
  const dispatch = useAppDispatch();
  const token = sessionStorage.getItem("userName");
  if (token === null || token === undefined || token === "") {
    dispatch(setUsername(token));
    return <Navigate to={"/login"} />;
  }

  return <Fragment>{children}</Fragment>;
}
