import React from "react";



const Testimonials = () => {
  return (
    <>
      <section className="service layout_padding testimonials">
        <div className="">
          <div className="container p-5">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
           
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <div className="detail-box testimonialsbox">
                    <h2>Priyanka</h2>
                    <p>
                      The studio is spacious and equipped with the latest
                      equipment <br /> Fantastic place to workout.
                    </p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box testimonialsbox">
                    <h2>Suvidha Verma</h2>
                    <p>
                      The fitness trainers at Urban Fit Studio are
                      knowledgeable, helpful <br /> and provide amazing training
                      without any doubt. Love the happy <br /> vibe
                    </p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box testimonialsbox">
                    <h2>Harshad Shinde</h2>
                    <p>
                      Urban fit studio is truly an amazing place to start
                      building a fit and <br /> healthy body. The studio has a
                      very comfortable and positive vibes
                    </p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box testimonialsbox">
                    <h2>Raj k</h2>
                    <p>
                      The studio is good with a wide range of equipment in a
                      good <br /> location. The staff is also polite and helpful
                    </p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box testimonialsbox">
                    <h2>Ajinkya</h2>
                    <p>
                      Amazing ambience, absolute cleanliness . I really enjoy
                      the <br /> positive vibes in the studio
                    </p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box testimonialsbox">
                    <h2>Ajinkya</h2>
                    <p>
                      Amazing ambience, absolute cleanliness . I really enjoy
                      the <br /> positive vibes in the studio
                    </p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="detail-box testimonialsbox">
                    <h2>Ria</h2>
                    <p>
                      The gym equipment is top class and the staff is really
                      warm and <br />
                      welcoming. Truly recommend
                    </p>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
