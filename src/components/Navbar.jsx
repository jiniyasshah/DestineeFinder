import React from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { userActions } from "../store/userSlicer";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { IoLogOut } from "react-icons/io5";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "../css/header.css";
const Navbar = () => {
  const [toggleLogin, setToggleLogin] = useState(false);

  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.user);
  const ref = useRef(null);
  const notify = (message) => {
    toast(message);
  };

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    try {
      if (!userDetails) {
        const { user } = await signInWithPopup(firebaseAuth, provider);
        const { providerData } = user;
        dispatch(userActions.storeUser(providerData[0]));
        notify("Successfully Loggedin");
      } else {
        setToggleLogin(!toggleLogin);
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleLogOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        notify("Successfully Loggedout");
        setToggleLogin(false);

        dispatch(userActions.logOutUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleLogin(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <header>
        <div id="menu-bar" className="fas fa-bars"></div>

        <a href="#" className="logo">
          <span>T</span>ravel
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#book">Book</a>
          <a href="#packages">Packages</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="icons">
          {!userDetails && (
            <i className="fas fa-user" id="login-btn" onClick={login}></i>
          )}

          <div className="relative" ref={ref}>
            {userDetails && (
              <img
                onClick={login}
                src={userDetails.photoURL}
                alt="User Image"
                className="userProfile"
              />
            )}
            {toggleLogin && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="logout-modal"
              >
                {userDetails && (
                  <p className="logout-button" onClick={() => handleLogOut()}>
                    <IoLogOut className="logoutLogo" /> Logout
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
