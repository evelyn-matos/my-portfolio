"use client"
import React from 'react'

export default function Sobre() {
  return (
    <main>
      <h1 className="block text-3xl mb-3 md:text-5xl leading-10 md:mb-6 text-black dark:text-white ">Todo sonho tem um <span className="font-indie text-3xl md:text-5xl text-pink">começo</span>, esse é o meu...</h1>
      <p className="text-base text-black dark:text-white">Depois de alguns anos trabalhando como assistente administrativo, resolvi seguir meu sonho e fazer a transição para a área de Técnologia. Sou do interior do Ms, mas atualmente moro em Vitória no ES.</p>
      <div className='mb-20'>
        <ul className='list-none text text-black dark:text-white p-5'>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Mesmo antes de estudar programação eu já criava sites para parentes e amigos com WordPress e adorava, portanto resolvi estudar programação voltada para Frontend.</li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Tenho amplo conhecimento nas tecnologias base como HTML, CSS e Javascript, além de estar buscando melhorar em TypeScript React e Next!</li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Estou cursando Análise e Desenvolvimento de Sistemas na Unisales. </li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Meu objetivo hoje é me aperfeiçoar no desenvolvimento web e mobile.</li>
          <li className="mb-2 before:content-['\2022'] before:text-pink before:text-2xl before:mx-2">Estou aberta a novas oportunidades onde eu possa contribuir com meu conhecimento e aprender com o time de devs!</li>
        </ul>
      </div>
    </main>
  )
}
