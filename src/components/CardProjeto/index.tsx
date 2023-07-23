"use Client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import './styles.css'

import { ProjetosType } from '@/interfaces/projetoType';
import { CardHeader } from '@mui/material';
import Link from 'next/link';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


export default function CardProjeto({title, img, tecnologias, desc, github, link }: ProjetosType ) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };
   

  return (
    <Card  className='max-w-[345px] min-h-[420px] mb-10 rounded-md bg-stone-100 dark:bg-neutral-800 md:mb-20'>
      <CardHeader
        title={title}
        className='text-pink'
      />

      <CardMedia >
        <Image 
          src={img}
          alt={title}
          min-height={200}
          min-width={'100%'}
          
        />
      </CardMedia>

      <CardContent>
        <Typography variant="body2"  className='h-[100px] text-gray dark:text-white'>
          {desc}
        </Typography>
      </CardContent>
      <div className='flex items-center justify-between'>
        <CardActions disableSpacing className='flex-auto'>
          <IconButton aria-label="Github" href={github}>
            <Tooltip title='Vusualizar Github'>
              <GitHubIcon className='text-gray hover:text-pink transition duration-700 ease-in out' />
            </Tooltip>
          </IconButton>
          <IconButton aria-label="Visualizar Deploy" href={link}>
            <Tooltip title='Vusualizar Deploy'>
              <VisibilityIcon className='text-gray hover:text-pink transition duration-700 ease-in out' />
            </Tooltip>
          </IconButton>
        </CardActions>
        <div className='flex-auto p-2'>
          <ul className='flex items-center justify-between'>
            {tecnologias.map((item, index) => (
              <li key={index} className='p-2'>
                <Tooltip title={item.name}>
                  <Image src={item.icone} alt={item.name} width={25} height={25}/>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
