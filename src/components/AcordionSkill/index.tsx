"use client"
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css';

export default function AccordionSoftSkill() {
  return (
    <div>
    <Accordion className='bg-[#eeeeee] dark:bg-[#424242] '>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className='text-gray dark:text-white'>Empatia e Trabalho em Equipe</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className='text-gray dark:text-white'>
          Em todas as empresas que trabalhei nunca tive problemas/desentendimentos com colegas de rabalho. 
          Sempre prezei por respeitar, conversar, entender cada situação e agir de maneira profissional. 
          Trago comigo a experiência de onde há o diálogo, respeito e acima de tudo a colaboração resulta em 
          um time produtivo e empenhado!
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion className='bg-[#eeeeee] dark:bg-[#424242]'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className='text-gray dark:text-white'>Rápido Aprendizado e Autodidata</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className='text-gray dark:text-white'>
          Estou em constante aprendizado, gosto de aprender coisas novas e de novos desafios. 
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion className='bg-[#eeeeee] dark:bg-[#424242]'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography className='text-gray dark:text-white'>Resiliência</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className='text-gray dark:text-white'>
          Adoro resolver problemas e não desisto fácil. Não paro enquanto não resolver.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
  )
}
