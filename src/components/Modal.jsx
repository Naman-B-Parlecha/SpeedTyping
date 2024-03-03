import React, { forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
import { IoIosClose } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
export default function Modal({ open, onClose }) {
  const dialogRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    }
  }, [open]);
  const userdata = JSON.parse(localStorage.getItem("user"));
  const { email, password } = userdata;

  async function handleSignOut() {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} className="modalConMain">
      <div className="modalContainer">
        <form method="dialog" className="modalform">
          <button className="closeModal">
            <IoIosClose />
          </button>
        </form>
        <h1 className="modalHeader">User Details</h1>
        <div className="modalDetails">
          <label className="detailHead">UserName: </label>
          <p className="details">Naman Parlecha</p>
        </div>
        <div className="modalDetails">
          <label className="detailHead">Email: </label>
          <p className="details">{email}</p>
        </div>
        <div className="modalDetails">
          <label className="detailHead">Password: </label>
          <p className="details">{password}</p>
        </div>
        <button className="signOutBtn" onClick={handleSignOut}>SignOut</button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
