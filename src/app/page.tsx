'use client'

import TypeScript from '../../public/icones/typescript.svg';
import React from '../../public/icones/react.svg';
import Next from '../../public/icones/next.svg';
import TailwindCss from '../../public/icones/tailwind.svg';
import photoDev from '../../public/images/imagedev.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';

import Image from 'next/image';
import ButtonLink from '@/shared/buttonLink';





export default function Home() {
  return (
    <main className='w-full  lg:max-w-[900px] xl:max-w-[1100px]' >
      <h1 className="block text-3xl mb-3 md:text-5xl leading-10 md:mb-6 text-black dark:text-white ">Hello Recruiter!<br/> Meu nome é <span className="font-indie  text-3xl md:text-5xl text-pink">Evelyn</span>, sou Desenvolvedora Frontend</h1>
      <p className="text-base text-black dark:text-white">Aqui você descobrirá mais sobre mim e conhecer meus projetos!</p>
      <p className="text-base text-black dark:text-white" >Fique a vontade para entrar em contato comigo, em caso de qualquer dúvida</p>
      <div className='lg:flex '>
        
        <section className='mt-8 flex flex-col items-center lg:flex-row lg:flex-1'>
          <div className='w-52 h-52 '>
            <Image 
              src={photoDev}
              alt='Imagem Evelyn'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}

            /> 
          </div>
          
          <div className='w-52 h-28 flex flex-col items-center justify-between '>
            <div className='mt-5'>
              <IconButton href='https://www.linkedin.com/in/evelyn-mm/' target="_blank">
                <Tooltip title='Linkdin'>
                  <LinkedInIcon className='text-gray hover:text-pink transition duration-700 ease-in-out'/>
                </Tooltip>
              </IconButton>
              <IconButton href='https://github.com/evelyn-matos' target="_blank">
                <Tooltip title='Github'>
                  <GitHubIcon className='text-gray hover:text-pink transition duration-700 ease-in-out'/>
                </Tooltip>
              </IconButton>
              <IconButton href='https://www.instagram.com/velyn.mm/' target="_blank">
                <Tooltip title='Instagram'>
                  <InstagramIcon className='text-gray hover:text-pink transition duration-700 ease-in-out'/>
                </Tooltip>
              </IconButton>
            </div>
            <div>
              <ButtonLink link='https://wa.me/message/ANISUNMFYS4DG1'>Entrar em Contato</ButtonLink>
            </div> 
          </div>
        </section>
        <section className=' mt-8 mb-20 lg:flex-1 '>
          <span className="block font-indie text-xl  text-center text-pink md:text-3xl md:mt-12">Principais Tecnologias</span>
          <ul className='flex justify-evenly mt-10 '>
            <li className="w-12 h-12 ">
              <Tooltip title='TypeScript'>
                <Image src={TypeScript} alt='Typescript'  className='w-full h-auto'></Image>
              </Tooltip>
            </li>
            <li className='w-12 h-12 '>
              <Tooltip title='ReactJs'>
                <Image src={React} alt='ReactJs' className='w-full h-auto'></Image>
              </Tooltip>
            </li>
            <li className='w-12 h-12 dark:bg-white dark:p-1 dark:rounded-md '>
              <Tooltip title='NextJs'>
                <Image src={Next} alt='NextJs' className='w-full h-auto'></Image>
              </Tooltip>
            </li>
            <li className='w-12 h-12 '>
              <Tooltip title='TailwindCss'>
                <Image src={TailwindCss} alt='TailwindCss' className='w-full h-auto'></Image>
              </Tooltip>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
