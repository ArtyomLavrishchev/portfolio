import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCoverflow} from 'swiper';
import Work from "../../work/Work";
import style from "./Coverflow.module.scss";

import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([EffectCoverflow]);

const Coverflow = ({works, theme}) => {
    return (
        <Swiper
            className={style.swiperContainer}
            effect="coverflow"
            grabCursor
            centeredSlides
            coverflowEffect={{
                rotate: 50,
                stretch: -30,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            initialSlide={Math.floor(works.length / 2)}
            slidesPerView={3}>
            <div>
                {works.map(work => <SwiperSlide key={work.id}>
                    <div className={style.swiperSlide}>
                        <Work theme={theme} work={work}/>
                    </div>
                </SwiperSlide>)}
            </div>
        </Swiper>
    );
};

export default Coverflow;