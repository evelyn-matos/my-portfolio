"use client"
import CardProjeto from '@/components/CardProjeto'
import Slider from '@/app/projetos/slider'
import React from 'react'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import { ProjetosItem } from '@/services/projetosItem'

export default function Projetos() {

  const settings: SwiperProps = {

   

    pagination: {
      clickable: true
    },

    breakpoints: {
      300: {
        slidesPerView:1,
        slidesPerGroup: 1,
      },
      
      700 : {
        navigation: true,
        slidesPerView:ProjetosItem.length > 2 ? 2 : ProjetosItem.length,
        slidesPerGroup: ProjetosItem.length > 2 ? 2 : ProjetosItem.length
      },

      900: {
        slidesPerView:ProjetosItem.length > 3 ? 3 : ProjetosItem.length,
        slidesPerGroup: ProjetosItem.length > 3 ? 3 : ProjetosItem.length
      }
    }

    
  }
  return (
    <main className='w-full lg:max-w-[900px] xl:max-w-[1100px] '>
        <h1 className="block text-3xl mb-3 md:text-5xl leading-10 md:mb-6 text-black dark:text-white ">Meus <span className="font-indie text-3xl md:text-5xl text-pink">Projetos</span></h1>
      <div className='h-relative flex justify-center items-center p-2 md:h-auto'>
        <Slider settings={settings} >
          {ProjetosItem.map((item, index) => (
            <SwiperSlide key={index} className='h-full'>
              <CardProjeto
                title={item.title}
                img={item.img}
                desc={item.desc}
                tecnologias={item.tecnologias}
                github={item.github}
                link={item.link}
              />
          </SwiperSlide>
          ))}
        </Slider>
      </div>
    </main>
  )
}