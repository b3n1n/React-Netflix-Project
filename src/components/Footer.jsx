import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

import "../styles/Footer.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="content-header">
          <span>POPULAR THIS WEEK</span>
        </div>

        <div className="content-bottom">
          <div className="content-swiper-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={15}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="Breaking bad" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="The rain" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="Life in a year" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="Money heist: korea" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="Squid game" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="content-age">
            <div className="content-age-red"></div>
            <div className="content-age-gray">
              <span>16+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
