import { StaticImageData } from "next/image"

interface Tecnologias {
    name: string, icone: string
}


export interface ProjetosType {
    title: string,
    desc: string,
    img: StaticImageData, 
    github: string,
    link: string,
    tecnologias: Array<Tecnologias>

} 