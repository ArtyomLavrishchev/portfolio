import React from 'react';
import style from "./Slider.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {A11y, EffectCube, Navigation, Pagination, Scrollbar} from 'swiper';
import Work from "../work/Work";


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-cube/effect-cube.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube]);


const Slider = ({works, theme}) => {
    return (
            <Swiper className={style.swiperContainer}
                    effect={"cube"}
                    loop
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    grabCursor={true}
                    navigation
                    pagination={{
                        clickable: true,
                    }}
            >
                {works.map(work => <SwiperSlide key={work.title}>
                    <Work theme={theme} work={work}/>
                </SwiperSlide>)}
            </Swiper>
    );
};

export default Slider;