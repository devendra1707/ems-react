import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { MdOutlineAddCard } from "react-icons/md";
import { TbEyeFilled } from "react-icons/tb";
import { BiCartAdd } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoIosList } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside id="sidebar" className="js-sidebar">
      {/* {JSON.stringify(userName)} */}
      <div className="h-100">
        <div className="sidebar-logo">
          <Link to="/">EMS</Link>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-header"></li>
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <FaList className="me-2" />
              Dashboard
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/employee" className="sidebar-link">
              <MdOutlineAddCard className="me-2" />
              Employee
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/gender" className="sidebar-link">
              <MdOutlineAddCard className="me-2" />
              Gender
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/adg" className="sidebar-link">
              <TbEyeFilled className="me-2" />
              ADG
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/cadre" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Cadre
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/circle" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Circle
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/department" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Department
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/designation" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Designation
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/division" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Division
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/employee-group" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Employee Group
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/employee-status" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Employee Status
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/pay-scale" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Pay Scale
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/post-held" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Post Held
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/region" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Region
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/reservation-clasification" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Reservation Classification
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/specialisation" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Specialisation
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/staff-category" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Staff Category
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/state" className="sidebar-link">
              <BiCartAdd className="me-2" />
              State
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/station" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Station
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/zone" className="sidebar-link">
              <BiCartAdd className="me-2" />
              Zone
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
