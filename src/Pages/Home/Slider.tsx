import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export default function Slider() {
  return (
    <>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          spaceBetween={10}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{delay:6000, }}
          effect='fade'
        >
          <SwiperSlide>
            <img loading="lazy" alt="" src={`../../../../public/Image/Home/Slides/slide1.png`}/>
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" alt="" src={`../../../../public/Image/Home/Slides/slide2.png`}/>
          </SwiperSlide>
        </Swiper>
    </>
  )
}
