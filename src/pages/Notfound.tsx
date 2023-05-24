import React from "react";
import notfoundimg from "../assets/images/notfound.png";

export default function Notfound() {
  return (
    <div
      style={{
        background: `url(${notfoundimg}) no-repeat fixed center/cover`,
        minHeight: "100vh"
      }}
    ></div>
  );
}
