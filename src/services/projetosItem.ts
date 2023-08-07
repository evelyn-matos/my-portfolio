import { ProjetosType } from "@/interfaces/projetoType";
import svg from '@/shared/iconsSVG';

import projetoCodificador from '../../public/images/projeto-codificador.png';
import projetoJogoMemoria from '../../public/images/projeto-jogoMemoria.png';
import projetoPokedex from '../../public/images/projeto-pokedex.png';
import projetoPortifolio from '../../public/images/projetoPortfolio.jpeg';
import projetoEasybank from '../../public/images/projeto-easybank.jpeg';
import Loading from '../../public/images/loadingCoding.png'

export const ProjetosItem: ProjetosType[] = [
    {
        title: 'Portfólio Pessoal',
        desc: 'Esse projeto foi foi pensado em trazer algo diferente do habitual, não apenas no sentido estético mas para que eu pudesse praticar meus conhecimentos e poder mostrá-los assim que meu portfólio fosse aberto. ',
        img: projetoPortifolio, 
        github: 'https://github.com/evelyn-matos/my-portifolio',
        link: 'https://evelyn-matos.vercel.app/',

        tecnologias: [
            {name: 'React', icone: svg.React},
            {name: 'Next', icone: svg.Next},
            {name: 'Typescript', icone: svg.Typescript},
            {name: 'TailwindCss', icone: svg.Tailwind},
            {name: 'Material UI', icone: svg.MaterialUi},
            {name: 'Swiper',  icone: svg.Swiper }
        ]
    },

    {
        title: 'Landing Page Easybank', 
        desc: 'Projeto de uma Landing Page focado em aprimorar minhas habilidades com React, Bootstrap e Sass. Challenge do site Frontend Mentor',
        img: projetoEasybank, 
        github: 'https://github.com/evelyn-matos/easybank',
        link: 'https://easybank-ecru.vercel.app/',
        tecnologias: [
            {name: 'React', icone: svg.React},
            {name: 'Typescript', icone: svg.Typescript},
            {name: 'Bootstrap', icone: svg.Bootstrap},
            {name: 'Sass', icone: svg.Sass},
            
        ]   
    },

    {
        title: 'Projeto Codificador', 
        desc: 'Projeto realizado no Programa One, onde realizamos um codificador que criptografa e descriptografa a mensagem digitada.',
        img: projetoCodificador, 
        github: 'https://github.com/evelyn-matos/ProjetosOne/tree/main/Decodificador',
        link: 'https://evelyn-matos.github.io/ProjetosOne/Decodificador/',
        tecnologias: [
            {name: 'Html', icone: svg.Html},
            {name: 'Css', icone: svg.Css},
            {name: 'JavaScript', icone: svg.Javascript}
            
        ]
 
    },

    {
        title: 'Projeto Pokedex', 
        desc: 'Esse projeto foi realizado no BootCamp da Dio. Fizemos junto a listagem dos pokemons e o exercício era ao clicar no Card mostrar as informações de cada pokemon. Foi muito desafiador mas no final consegui finalizar',
        img: projetoPokedex, 
        github: 'https://github.com/evelyn-matos/DIO-OrangeTech/tree/main/Pokedex',
        link: 'https://evelyn-matos.github.io/DIO-OrangeTech/Pokedex/',
        tecnologias: [
            {name: 'Html', icone: svg.Html},
            {name: 'Css', icone: svg.Css},
            {name: 'JavaScript', icone: svg.Javascript}
            
        ]

        
    },

    {
        title: 'Projeto Jogo da Memória', 
        desc: 'Esse foi um dos primeiros projetos que realizei, enquanto aprendia Html, css e Javascript. Ess é um jogo da memória, com o tema de layout inspirado em Game Of Thrones. ',
        img: projetoJogoMemoria, 
        github: 'https://github.com/evelyn-matos/jogo-memoria-got',
        link: 'https://evelyn-matos.github.io/jogo-memoria-got/',
        tecnologias: [
            {name: 'Html', icone: svg.Html},
            {name: 'Css', icone: svg.Css},
            {name: 'JavaScript', icone: svg.Javascript}
            
        ]

        
    },

    {
        title: 'Controle de Finanças Pessoais', 
        desc: 'Estou buscando desenvolver um site de controle de finanças pessoais, praticando conhecimento frontend e estudando backend para aplicar neste projeto',
        img: Loading, 
        github: '',
        link: '',
        tecnologias: [
            {name: 'React', icone: svg.React},
            {name: 'Next', icone: svg.Next},
            {name: 'Typescript', icone: svg.Typescript},
            {name: 'TailwindCss', icone: svg.Tailwind},
            {name: 'Material UI', icone: svg.MaterialUi},
            
            
        ]   
    },
]