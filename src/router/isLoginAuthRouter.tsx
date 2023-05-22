import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};
export default function isLoginAuthRouter({ children }: Props) {
  const token = sessionStorage.getItem("userName");
  if (token === null || token === undefined) {
    return <Navigate to={"/login"} />;
  } 

  return <Fragment>{children}</Fragment>;
}
