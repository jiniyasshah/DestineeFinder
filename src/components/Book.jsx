import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Book = () => {
  const userDetails = useSelector((store) => store.user);
  const [formData, setFormData] = useState({
    arrivingTime: "",
    leavingTime: "",
    numberOfGuest: "",
    placeName: "",
  });

  const notify = (message) => {
    toast(message);
  };
  const isFormDataFilled = () => {
    // Get an array of values from the formData object
    const formValues = Object.values(formData);

    // Check if any value is an empty string
    const isFilled = formValues.every((value) => value.trim() !== "");

    return isFilled;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (!userDetails) {
      notify("User need to be loggedin", "danger");
      e.preventDefault();
    }
    if (userDetails && isFormDataFilled()) {
      setFormData({
        arrivingTime: "",
        leavingTime: "",
        numberOfGuest: "",
        placeName: "",
      });
      localStorage.setItem("FormData", JSON.stringify(formData));
    }
  };

  return (
    <div>
      <section className="book" id="book">
        <h1 className="heading">
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
          <span className="space"></span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src="images/book-img.svg" alt="" />
          </div>

          <form>
            <div className="inputBox">
              <h3>where to</h3>
              {/* <input type="text" name="placeName" placeholder="Place name" value={formData.name} onChange={handleChange} /> */}

              <select
                name="placeName"
                value={formData.placeName}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a place
                </option>
                <option value="Kathmandu">Kathmandu</option>
                <option value="Pokhara">Pokhara</option>

                <option value="Solukhumbu">Solukhumbu</option>
                <option value="Mugu">Mugu</option>
                <option value="Illam">Illam</option>
              </select>
            </div>
            <div className="inputBox">
              <h3>how many</h3>
              <input
                type="number"
                name="numberOfGuest"
                placeholder="Number of guests"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <h3>arrivals</h3>
              <input
                type="date"
                name="arrivingTime"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <h3>leaving</h3>
              <input
                type="date"
                name="leavingTime"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <Link
              to={isFormDataFilled() ? "/checkout" : "/"}
              onClick={handleSubmit}
              className="btn"
            >
              Book Now
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Book;
