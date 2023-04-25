import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Section6 = () => {
  return (
    <>
      
        <section className="section section-testimonial">
          <div className="container">
            <h2 className="common-heading">Happy Client Works</h2>
          </div>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
          <div className="swiper mySwiper container">
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  {/* <!-- section end --> */}
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/prince.jpg"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>prince radadiya</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/princu.jpeg"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>prince radadiya</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/dkprince.JPG"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>drup donda</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/sujal.jpeg"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>sujal vavadiya</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/zeel.jpeg"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>zeel kukdiya</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/prince.jpg"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>prince radadiya</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/keyur.JPG"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>keyur radadiya</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/sneh.jpeg"
                        loading="lazy"
                        alt="client review"
                        // srcset=""
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>sneh magukiya</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>
                      Be courageous. Challenge orthodoxy. Stand up for what you
                      believe in. When you are in your rocking chair talking to
                      your grandchildren many years from now, be sure you have a
                      good story to tell.
                    </p>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img
                        src="img/friend.jpg"
                        loading="lazy"
                        alt="client review"
                      />
                    </figure>
                    <div className="client-data-details">
                      <p>All friend</p>
                      <p>entrepreneur</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-pagination"></div>
          </div>
      </Swiper>
        </section>
    </>
  );
};

export default Section6;
