import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Slider from "./Silder";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNextSlide = () => {
    setSelectedIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousSlide = () => {
    setSelectedIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <section className="service layout_padding" id="services" >
        <div className="container">
          <div className="row">
            <div className="heading_container heading_center">
              <h2
                className="py-3"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Our Services.
              </h2>
              <p
                className="py-3 mx-auto w-75 "
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="8000"
              >
                Urban Fit offers a full range of group fitness activities like
                HIIT, Zumba, Kickboxing suitable for all levels of fitness
                lovers. We also provide personal training sessions at the studio
                at your convenience.
              </p>
            </div>
            {/* <span onClick={handlePreviousSlide}></span>
            <span onClick={handleNextSlide}></span> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Slider/>           
            </div>
          </div>
        </div>
      </section>

      <section className="health_section">
        <div className="container">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-7 col-lg-4">
                <div className="detail-box">
                  <h2 data-aos="zoom-in">
                    <span> Health & Fitness at your Fingertips.</span>
                  </h2>
                  <p data-aos="flip-up">
                    Your Fitness Goals are now achievable with Fitness Apps.
                    Personal Dietitian, Personal Trainer, Health Supplement, and
                    much more for a Healthy Lifestyle.
                  </p>
                  <div className="health_btn_box" data-aos="fade-in" data-aos-duration="1000">
                    <Link to="/" className="mr-1">
                      <img
                        src="images/google_play.png"
                        className="box-img"
                        alt=""
                      />
                    </Link>
                    <Link to="/">
                      <img
                        src="images/app_store.png"
                        className="box-img"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-8">
                <div className="img-box" data-aos="zoom-in-down">
                  <img
                    src="images/bannerimg.jpg"
                    className="box-img animateds"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
