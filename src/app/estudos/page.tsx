"use client"
import React from 'react';
import Slider from '@/app/estudos/slider';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { CardEstudos } from '@/services/estudosItem';
import ButtonLink from '@/shared/buttonLink';

export default function Estudos() {

  const settings: SwiperProps = {
    
    effect: 'cards',
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: false
    },
    
    pagination: {
      clickable: true,
    },
   
}


  return (
    <main className='w-full lg:max-w-[900px] xl:max-w-[1100px] ' >
      <h1 className="block text-3xl mb-3 md:text-5xl leading-10 md:mb-6 text-black dark:text-white ">Cursos e <span className="font-indie text-3xl md:text-5xl text-pink">BootCamps</span></h1>
      <div className='h-relative flex justify-evenly items-center mb-2  md:pb-[50px] xl:h-auto  xl:border xl:border-red-500'>
        <Slider settings={settings} >
          {CardEstudos.map((cardItem, index) => (

            <SwiperSlide key={index} >
              <div className='w-[80%] max-w-[300px] h-[60%] min-h-[320px] md:max-w-[400px] mt-2 mb-2 xl:mb-10 flex flex-col justify-evenly text-center p-4 bg-background-ligth dark:bg-background-dark border border-gray rounded-xl hover:border-pink'>
                <h2 className='text-pink md:text-xl'>{cardItem.title} <br/>
                  {cardItem.subTitle}
                </h2>

                <span className='text-gray md:text-lg'>{cardItem.empresa}</span>

                <p className='text-black dark:text-white md:text-base'>{cardItem.description}</p>
                
                <ButtonLink link={cardItem.link}>Ver Certificado</ButtonLink>
              </div>
            </SwiperSlide>

          ))}

          
        </Slider>
      </div>
    </main>
  )
}
