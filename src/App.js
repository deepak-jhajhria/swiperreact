import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Virtual } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import "swiper/css/virtual";
import image from './assets/images/Image.png'
export default function App() {
  return (
    <div className="container">
      <Swiper
        modules={[Virtual, Pagination]}
        pagination={true}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={4}
        virtual
      >
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img className="w-100" src={image} alt="image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div >
  );
}
