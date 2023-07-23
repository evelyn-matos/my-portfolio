"use client"
import React from 'react'

export default function Sobre() {
  return (
    <main className='w-full lg:max-w-[900px] xl:max-w-[1100px]'>
      <h1 className="block text-3xl mb-3 md:text-5xl leading-10 md:mb-6 text-black dark:text-white ">Todo sonho tem um <span className="font-indie text-3xl md:text-5xl text-pink">começo</span>, esse é o meu...</h1>
      <p className="text-base text-black dark:text-white">Depois de alguns anos trabalhando como assistente administrativo, resolvi seguir meu sonho e fazer a transição para a área de Tecnologia.</p>
      <div className='mb-20'>
        <ul className='list-none text text-black dark:text-white p-5'>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Mesmo antes de estudar programação eu já criava sites para parentes e amigos com WordPress e adorava, portanto resolvi estudar programação voltada para Frontend.</li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Tenho amplo conhecimento em HTML, CSS e Javascript, além de estar me aprofundando em TypeScript e React/Next!</li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Estou cursando Análise e Desenvolvimento de Sistemas na Unisales. </li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Meu objetivo hoje é me aperfeiçoar no desenvolvimento web, mas estou aberta a novas possibilidades tanto no Frontend quanto no Backend.</li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Estou muito empolgada em busca de uma oportunidade de aprender mais com outros devs e contribuir com meus conhecimentos!</li>
        </ul>
      </div>
    </main>
  )
}
