import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Navbar.scss";
import { FaUserAstronaut } from "react-icons/fa";
import logo from "../assets/backImage.jpg";
import "./navbar.css";
export default function NavBar() {
  return (
    <div className="navCon">
      <h3 className="navHeader">
        <Link to={"/"} className="navHeadLogo">
          <img src={logo} alt="logo" className="navLogo" />
          Torch
        </Link>
      </h3>
      <div className="grp-link">
        <NavLink
          to={"/"}
          className={`nav-links ${({ isActive }) => {
            isActive ? "active" : ""
          }}`}
        >
          TYPING TEST
        </NavLink>
        <NavLink
          to={"/Practice"}
          className={`nav-links ${({ isActive }) => {
            isActive ? "active" : undefined
          }}`}
        >
          PRACTICE
        </NavLink>
        <NavLink
          to={"/"}
          className={`nav-links ${({ isActive }) => {
            isActive ? "active" : undefined
          }}`}
        >
          LEADERBOARDS
        </NavLink>
      </div>
      <button className="userProf">
        <FaUserAstronaut />
      </button>
    </div>
  );
}
