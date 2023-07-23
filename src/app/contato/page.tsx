"use client"
import ButtonLink from '@/shared/buttonLink'
import React from 'react'

export default function Contato() {
  return (
    <main className='w-full lg:max-w-[900px] xl:max-w-[1100px]'>
        <h1 className="block text-3xl mb-3 md:text-5xl leading-10 md:mb-6 text-black dark:text-white ">Vamos trabalhar <span className="font-indie text-3xl md:text-5xl text-pink">juntos?!</span></h1>
        <div className='mb-20'>
            <ul className='list-none text text-black dark:text-white p-5'>
                <li className="mb-2  before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Estou em busca de uma oportunidade como Estagiária ou Frontend Júnior.</li>
                <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Estou aberta a aprender novas tecnologias e me dedicar ao máximo para evoluir e contribuir com a empresa.</li>
                <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Meu desejo é trabalhar em um empresa onde eu seja desafiada a sair da zona de conforto, contribuir para o crescimento da empresa e crescer profissionalmente!</li>
                <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Entre em contato comigo, tenho certeza que eu possso contribuir muito na equipe.</li>
            </ul>
            <div className=' h-24 flex flex-col items-center justify-between md:max-w-[450px] md:flex-row md:ml-[33%]'>
            <ButtonLink link='mailto:euevelynmatos@gmail.com?subject=Proposta de Trabalho&body='> Enviar Proposta no Email</ButtonLink>
            <ButtonLink link='https://www.linkedin.com/in/evelyn-mm/' > Conversar no Whatsapp</ButtonLink>
            </div>
      </div>
    </main>
  )
}
