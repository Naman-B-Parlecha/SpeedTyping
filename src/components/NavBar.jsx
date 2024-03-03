import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import logo from "../assets/backImage.jpg";
import "./navbar.css";
import Modal from "./Modal";
export default function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  function handleModalOpen() {
    setOpenModal(true);
  }
  function handleClose(){
    setOpenModal(false);
  } 
  return (
    <>
      <Modal open={openModal} onClose={handleClose} />
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
              isActive ? "active" : "";
            }}`}
          >
            TYPING TEST
          </NavLink>
          <NavLink
            to={"/practice"}
            className={`nav-links ${({ isActive }) => {
              isActive ? "active" : undefined;
            }}`}
          >
            PRACTICE
          </NavLink>
          <NavLink
            to={"/leaderboard"}
            className={`nav-links ${({ isActive }) => {
              isActive ? "active" : undefined;
            }}`}
          >
            LEADERBOARDS
          </NavLink>
        </div>
        <button className="userProf" onClick={handleModalOpen}>
          <FaUserAstronaut />
        </button>
      </div>
    </>
  );
}
