import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import './Banner.css';
import { Autoplay,  EffectFade,  Navigation } from "swiper";

const Banner = () => {

    const data = [
        {
            "thumbnail" : "https://static.showit.co/1200/PIOcZNJBRPyaMVZJDRDleA/21679/73304042.jpg",
            "details" : 'This wedding is very interesting Wedding'
        },
        {
            "thumbnail" : "https://assets.vogue.in/photos/6360ee4b74016d3adc45f105/16:9/w_1280,c_limit/JR.WP-244.jpg",
            "details" :  'This Festibal Wedding is very interesting Wedding'
        },
        {
            "thumbnail" : "https://i.ytimg.com/vi/EBv48eIcwiQ/maxresdefault.jpg",
            "details" :  'This Gourgious is very interesting Wedding'
        }
    ]

    return (
        <div className='h-[350px] md:h-[450px] lg:h-[600px] w-full'>
             <Swiper
             effect={"fade"}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
            type: "progressbar",
            }}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper"
      >
        {
            data.map(slide => <SwiperSlide
            className='bg-opacity-20'
            style={{ backgroundImage:`url(${slide.thumbnail})`, backgroundRepeat:'no-repeat', backgroundSize:'Cover', opacity:'0.5' }}
            > 
            <h1 class=" absolute bottom-12 font-extrabold text-transparent text-xl md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-emerald-400 to-red-300" >

                {slide.details}
            </h1>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    );
}

export default Banner;
