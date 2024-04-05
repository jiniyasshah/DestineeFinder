import React from "react";
import HeaderLogo from "./HeaderLogo";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
const CheckoutLayout = ({ children }) => {
  const userDetails = useSelector((store) => store.user);
  return (
    <>
      {userDetails ? (
        <>
          <HeaderLogo />
          {children}
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="dark"
            transition:Bounce
          />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default CheckoutLayout;
