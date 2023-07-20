import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  {
    url: "images/img6.jpg",
    product_title: "Premium & Sporty",
    product_description:
      "Train in style with our high-performance sports and trendy wears",
    button: "Coming Soon",
    bard_img: "images/studiologo2.png",
  },
  {
    url: "images/img7.jpg",
    product_title: "Personalized Fitness",
    product_description:
      " Train under Certified Expert Trainer to achieve your fitness goals fast and easy",
    button: "Visit Now",
    bard_img: "images/studiologo2.png",
  },
  ,
  {
    url: "images/img5.jpg",
    product_title: "Feed your body with Right Nutrition.",
    product_description:
      "Genuine Branded Proteins & Health Supplements at  discounted prices.",
    button: "Visit Now",
    bard_img: "images/storelogo2.png",
  },
];
const Products = () => {
  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((product, index) => {
          return (
            <div className="slider row align-items-center" key={index}>
              <div
                className="col-12 col-md-7"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={product.url}
                  alt={product.product_title}
                  className="product_item"
                />
              </div>
              <div className="col-12 col-md-5">
                <div className="text-box" data-aos="flip-right">
                  <img className="bard_img" src={product.bard_img} />
                  <h3 className="py-3 product_title" >
                    {product.product_title}
                  </h3>
                  <p className="py-3 product_description">
                    {product.product_description}
                  </p>

                  <button type="button" className="btn btn-primary">
                    {product.button}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Products;
