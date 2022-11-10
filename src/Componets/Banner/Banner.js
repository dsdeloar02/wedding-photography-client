import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import './Banner.css';
import { Autoplay,  EffectFade,  Navigation } from "swiper";

const Banner = () => {

    const [data, setData] = useState([]) ;

    useEffect(() => {
        fetch('https://wedding-photography-server.vercel.app/banners')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

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
