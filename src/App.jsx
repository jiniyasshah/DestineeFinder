import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Book from "./components/Book";
import Package from "./components/Package";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userActions } from "./store/userSlicer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { providerData } = user;
        dispatch(userActions.storeUser(providerData[0]));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Home />
      <Book />
      <Package />
      <Service />
      <Gallery />
      <Review />
      <Contact />
      <Brand />
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
    </div>
  );
};

export default App;
