import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectCube, Pagination} from 'swiper';
import Work from "../../work/Work";
import style from "./Cube.module.scss";

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

SwiperCore.use([Pagination, EffectCube]);

const Cube = ({works, theme}) => {
    return (
        <Swiper className={style.swiperCubeContainer}
                effect={"cube"}
                loop
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}>
            {works.map(work => <SwiperSlide key={work.id}>
                <Work theme={theme} work={work}/>
            </SwiperSlide>)}
        </Swiper>
    );
};

export default Cube;