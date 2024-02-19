import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { PiMoonStarsDuotone } from "react-icons/pi";
import "./Navbar.scss";

export default function NavBar() {
  const [colorTheme, setColorTheme] = useState("Light");
  function handleToggle() {
    if (colorTheme === "Light") {
      setColorTheme("Dark");
    } else {
      setColorTheme("Light");
    }
  }
  return (
    <nav className="navcon">
      <h1 className="nav-header">The Torch</h1>
      <div className="nav-inner-con">
        <Link className="nav-link" to='/'>Typing test</Link>
        <Link className="nav-link" to='/practice'>Practice</Link>
        <button className="darkmode" onClick={handleToggle}>
          <p className="darkmode-text">{colorTheme} Mode</p>
          {colorTheme === "Dark" && (
            <PiMoonStarsDuotone className="darkmode-icon" />
          )}
          {colorTheme === "Light" && <IoSunnySharp className="darkmode-icon" />}
        </button>
        <button className="userNav">
          <FaRegUser />
        </button>
      </div>
    </nav>
  );
}
