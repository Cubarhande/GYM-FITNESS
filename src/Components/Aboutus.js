import React from "react";

const Aboutus = () => {
  return (
    <>
      <section className="about-section layout_padding-top" id="about">
        <div className="container">
          <div className="heading_container heading_center" data-aos="flip-up">
            <h2 className="py-3" >About Us</h2>
          </div>
          <div className="row align-items-center ">
            <div className="col-md-6 " data-aos="zoom-in">
              <img src="images/about.jpg" className="about-img animateds " alt="about"/>
            </div>
            <div className="col-md-6" >
              <div className="m-3" >
                <p className="py-2 pt-5"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                  We are a fitness brand that welcomes everyone to achieve a
                  well-being program and lead a healthier life at affordable
                  prices.
                </p>
                <p className="py-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100">
                  We make it easy to add different workouts that help in muscle
                  and strength building, and toning into your daily routine
                  which can be tailored to your needs with the help of digital
                  classes and training that can be done from your living room as
                  well as in the gym.
                </p>
                <p className="py-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200">
                  We have got you covered with supplements, free workouts, group
                  activities, healthy recipes, and wellbeing tips at the gym,
                  App, and on social media.
                </p>
                <p className="py-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300">
                  With easy access to an experienced set of gym and passionate
                  trainers, you will have the full assistance you need to reach
                  your goals in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
