import React from "react";

const Package = () => {
  return (
    <div>
      <section className="packages" id="packages">
        <h1 className="heading">
          <span>p</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span>a</span>
          <span>g</span>
          <span>e</span>
          <span>s</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/p-1.jpg" alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Mumbai{" "}
              </h3>
              <p>
                Mumbai is the centre of the Mumbai Metropolitan Region, the
                sixth most populous metropolitan area in the world with a
                population of over 23 million.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                Rs.9,999 <span>Rs.16000</span>{" "}
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>

          <div className="box">
            <img src="images/p-2.jpg" alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Hawaii{" "}
              </h3>
              <p>
                Hawaii is a state in the Western United States located in the
                Pacific Ocean about 2,000 miles from the U.S. mainland. It is
                the only state that is an archipelago.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                Rs.49,999 <span>Rs.62,000</span>{" "}
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>

          <div className="box">
            <img src="images/p-3.jpg" alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Sydney{" "}
              </h3>
              <p>
                Sydney, capital of New South Wales and one of Australia's
                largest cities, is best known for its harbourfront Sydney Opera
                House, with a distinctive sail-like design.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                Rs.99,999 <span>Rs.1,20,000</span>{" "}
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>

          <div className="box">
            <img src="images/p-4.jpg" alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Paris{" "}
              </h3>
              <p>
                Paris, France's capital, is a major European city and a global
                center for art, fashion, gastronomy and culture. Its
                19th-century cityscape is crisscrossed we are passionate about
                crafting unforgettable travel experiences for our
                clients.Welcoming you to Paris!
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                Rs.89,999 <span>Rs.1,00,000</span>{" "}
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>

          <div className="box">
            <img src="images/p-5.jpg" alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Tokyo{" "}
              </h3>
              <p>
                Tokyo, Japan’s busy capital, mixes the ultramodern and the
                traditional, from neon-lit skyscrapers to historic temples.The
                opulent Meiji Shinto Shrine is known for its towering gate and
                surrounding woods. The Imperial Palace sits amid large public
                gardens.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                Rs.79,999 <span>Rs.90,000</span>{" "}
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>

          <div className="box">
            <img src="images/p-6.jpg" alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Egypt{" "}
              </h3>
              <p>
                Egypt, a country linking northeast Africa with the Middle East,
                dates to the time of the pharaohs. Millennia-old monuments sit
                along the fertile Nile River Valley, including Giza's colossal
                Pyramids and Great Sphinx as well as Luxor's hieroglyph-lined
                Karnak Temple and Valley of the Kings tombs.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="price">
                {" "}
                Rs.1,29,999 <span>RS.1,50,000</span>{" "}
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Package;
