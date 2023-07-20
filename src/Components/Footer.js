import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const Handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="footer_container" id="Contact">
        <section className="info_section ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-7 ">
                <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                  We’re here to help and answer any questions you might have. We
                  will answer your inquiries in a maximum of 48 hours.
                </p>

                <ul className="info_links list-unstyled">
                  <li
                    className="py-2"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <Link to="tel:+918799952724" className="py-3">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      Tel : +918799952724
                    </Link>
                  </li>
                  <li
                    className="py-2"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <Link
                      to="mailto:info@urbanfitwellness.com"
                      className="py-3"
                    >
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      Email : info@urbanfitwellness.com
                    </Link>
                  </li>
                  <li
                    className="py-2"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Reach Us : OFFICE NO. 1 D, 2nd Floor, Cerebrum IT Park,
                    Kalyani Nagar, Pune - 411014
                  </li>
                </ul>
                <div
                  className="social_box float-start"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Link to="/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <form onSubmit={Handlesubmit}>
                  <h3
                    data-aos="fade-down"
                    data-aos-anchor-placement="top-center"
                  >
                    Let's Get Moving.{" "}
                  </h3>
                  <p>Sign Up For Updates</p>
                  <div className="mb-1">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Email address</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">
                      Type your message here...
                    </label>
                    <textarea
                      className="form-control"
                      cols="2"
                      rows="2"
                    ></textarea>
                  </div>
                  <br />

                  <button type="submit" className="btn btn-primary ">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div></div>
          </div>
        </section>
        <footer className="footer_section">
          <div className="container">
            <marquee>&copy; 2018-22 by UrbanFit Wellness.</marquee>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
