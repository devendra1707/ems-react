import React from "react";
import Sidebar from "./Sidebar";
import CustomNavbar from "./CustomNavbar";
import { useNavigate } from "react-router-dom";

const Base = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <CustomNavbar />
        {children}
      </div>
    </div>
  );
};

export default Base;
