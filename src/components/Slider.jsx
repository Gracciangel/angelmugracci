import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/style.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useState } from 'react';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import React from 'react'
import { CustomCard } from './CustomCard';

export const Slider = () => {

    const imgs = [{
        title: 'Battle-Ship',
        url: './src/assets/img/battle.png',
        body: 'Juego diseñado en html javaScript css y sass como preprocesador',
        route: 'https://incandescent-llama-6b19e3.netlify.app/'
    },
    {
        title: 'Sillon',
        url: './src/assets/img/sillon.png',
        body: 'aplicacion que muestra un listado de peliculas consumidas desde una API Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ex reiciendis aperiam et eaque sapiente molestiae alias enim ullam a? Nulla soluta ducimus ex, perspiciatis necessitatibus natus ea accusantium cupiditate.'
    }
    ]

    return (
        <>
            <div className="container">
                <Swiper
                    effect={'coverflow'}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 1,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        <>
                            <SwiperSlide>
                                <div className="containerCard">
                                    <CustomCard img={imgs[0].url} title={imgs[0].title} description={imgs[0].body} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="containerCard">
                                    <CustomCard img={imgs[1].url} title={imgs[1].title} description={imgs[1].body} />
                                </div>
                            </SwiperSlide>

                        </>
                    }


                </Swiper>
            </div>
        </>
    );
}
