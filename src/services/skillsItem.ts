import { PropsSkill } from "@/interfaces/skillType"
import svg from '@/shared/iconsSVG';

export const SkillItem: PropsSkill[] = [
    {
        title: 'Básico - Frontend',
        tecnologias: [
            {name: 'HTML', icone: svg.Html},
            {name: 'CSS', icone: svg.Css },
            {name: 'GIT', icone: svg.Git},
            {name: 'Github', icone: svg.Github},        
        ],
        
    },
    {
        title: 'Línguagens e Frameworks',
        tecnologias: [
            {name: 'JavaScript', icone: svg.Javascript},
            {name: 'TypeScript', icone: svg.Typescript},
            {name: 'React', icone: svg.React },
            {name: 'Next', icone: svg.Next}
                    
        ],
        
    }, 
    {
        title: 'Estilizadores',
        tecnologias: [
            {name: 'Bootstrap', icone: svg.Bootstrap},
            {name: 'Tailwind', icone: svg.Tailwind},
            {name: 'Material UI', icone: svg.MaterialUi},
            {name: 'Styled Components', icone: svg.StyledComponents},        
        ],
        
    },
    {
        title: 'Ferramentas',
        tecnologias: [
            {name: 'Sass', icone: svg.Sass},
            {name: 'Webpack', icone: svg.Webpack},
            {name: 'Swiper', icone: svg.Swiper },
                   
        ],
        
    },
]