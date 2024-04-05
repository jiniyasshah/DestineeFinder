import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Review = () => {
  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">
          <span>r</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
        </h1>

        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <img src="images/pic1.png" alt="" />
              <h3>Samita Malla</h3>
              <p>
                As a frequent traveler, I can confidently say that their service
                has redefined my exploration experience. Every journey with this
                platform is a testament to their dedication to excellence in
                travel.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="images/pic2.png" alt="" />
              <h3>Ramesh Koirala</h3>
              <p>
                Discovering this travel service was a game-changer! Their
                personalized approach and attention to detail made my journey
                unforgettable. From booking to return, they exceeded
                expectations.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="box">
                <img src="images/pic3.png" alt="" />
                <h3>Klara Lama</h3>
                <p>
                  Unmatched adventure awaits with this service! Expert guides
                  and seamless logistics ensure stress-free exploration. Whether
                  a newbie or seasoned traveler, they cater to every wanderlust.
                </p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="images/pic4.png" alt="" />
              <h3>john deo</h3>
              <p>
                Unmatched adventure awaits with this service! Expert guides and
                seamless logistics ensure stress-free exploration. Whether a
                newbie or seasoned traveler, they cater to every wanderlust.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides for additional content */}
        </Swiper>
      </section>
    </div>
  );
};

export default Review;
