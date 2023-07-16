"use client"
import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, EffectCards} from 'swiper/modules';


import './styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'




type SliderProps = {
    settings: SwiperProps;
    children: ReactNode;
    
}

export default function Slider({ settings, children }: SliderProps){
    return(<Swiper modules={[Navigation, Pagination, EffectCards]} {...settings}>{children}</Swiper>)
}