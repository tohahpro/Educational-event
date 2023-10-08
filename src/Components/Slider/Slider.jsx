import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


// Import Swiper styles
import 'swiper/css';
import image1 from '../../assets/Images/Event Marketing and Promotion.jpg';
import image2 from '../../assets/Images/Certification - Services.jpg';
import image3 from '../../assets/Images/Seminar Management.jpg';

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 25,

                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img className='h-[600px] w-full' src={image1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src={image2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src={image3} alt="" /></SwiperSlide>


            </Swiper>


        </div>
    );
};

export default Slider;