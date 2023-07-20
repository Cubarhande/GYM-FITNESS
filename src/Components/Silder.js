import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 1    ,
    slidesToSlide: 1, // optional, default to 1.
  },
  
};
const sliderImageUrl = [
  //First image url
  {
    url: "images/img1.jpg",
    card__title: " Personal Dieticians",
    card__description:
      " Unlock the power of healthy eating with our   expert personal dietitian. We'll work with you    to create a customized meal plan for Weight    Loss, Muscle Gain, PCOD, and much more.",
  },
  {
    url: "images/img2.jpg",
    card__title: " Personal Trainer",
    card__description:
      " Get the support and motivation you need to reach   your fitness goals with our personal training    services. Get fit at home or Fitness Studio with    one-to-one consultation.",
  },
  {
    url: "images/img3.jpg",
    card__title: "Exercise Video ",
    card__description:
      "Get fit for free with our workout video! Our  expert trainers will guide you through a fun and    effective workout that you can do in your own    comfort. ",
  },
  {
    url: "images/img4.jpg",
    card__title: " Protein Supplements",
    card__description:
      " Buy 100% Authentic Protein & Healthy Supplements at the best price. Branded Supplements with Free    Shipping and COD are available.",
  },
];
const Slider = () => {
  return (
    <div className="parent py-3">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider " key={index}>
              <div className="detail-box ">
                <article className="card zoomIn scrollanimation animated">
                  <header className="card__thumb">
                    <img src={imageUrl.url} alt={imageUrl.card__title} />
                  </header>
                  <div className="card__body">
                    <h2 className="card__title">{imageUrl.card__title}</h2>
                    <p className="card__description">
                      {imageUrl.card__description}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
