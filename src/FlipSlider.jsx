import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


const FlipSlider = () => {
    return (
        <div className='pt-5'>
            <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} modules={[EffectFlip, Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img className='w-100' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FlipSlider
