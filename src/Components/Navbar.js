import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const myNavRef = useRef(null);
  const customMenuBtnRef = useRef(null);
  const openNav = () => {
    myNavRef.current.classList.toggle("menu_width");
    customMenuBtnRef.current.classList.toggle("menu_btn-style");
  };
  return (
    <>
      <div className="hero_area">
        <video id="myVideo" autoPlay preload="auto" loop>
          <source src="./images/file.mp4" type="video/mp4" />
        </video>
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <img src="images/logo.png" className="logo" />
              </Link>
              <div className="custom_menu-btn">
                <button ref={customMenuBtnRef} onClick={openNav}>
                  <img src="images/menu.png" alt="menu" />
                </button>
              </div>
              <div id="myNav" className="overlay" ref={myNavRef}>
                <div className="overlay-content">
                  <Link to="/Home">Home</Link>
                  <Link to="/about">About-Us</Link>
                  <Link to="/services">Our Services</Link>
                  <Link to="/contact">Contact us</Link>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="video-text " id="Home">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-5">
                <h1
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Make Fitness your <br /> Ultimate Goal.
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Knocking out troubles like "bad quality of service" and
                  "adulterated products," UrbanFit is now re-purposed to solve
                  every problem in the relatives of the health fragment,
                  nourishments, and personal fitness industry.
                </p>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary m-2"
                    data-aos="zoom-in-left"
                  >
                    Commit today
                  </button>
                  <button
                    type="button"
                    className="btn btn-success m-2"
                    data-aos="zoom-in-right"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
