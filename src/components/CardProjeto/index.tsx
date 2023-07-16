"use Client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import './styles.css'

import { ProjetosType } from '@/interfaces/projetoType';
import { CardHeader } from '@mui/material';


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
    <Card  className='max-w-[345px] min-h-[420px] rounded-md bg-stone-100 dark:bg-neutral-800 md:mb-7'>
      <CardHeader
        title={title}
        className='font-indie text-pink'
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
        <Typography variant="body2"  className='text-gray dark:text-white'>
          {desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="Github">
        <GitHubIcon className='hover:text-pink transition duration-700 ease-in out' />
        </IconButton>
        <IconButton aria-label="Visualizar Deploy" >
          <VisibilityIcon className='hover:text-pink transition duration-700 ease-in out' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className='hover:text-pink'/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph>
            <span className='p-3 text-pink'>Tecnologias Utilizadas</span>
            <ul className='p-3 mb-32 flex items-center justify-evenly'>
              {tecnologias.map((item, index) => (
                <li key={index}>
                  <Image src={item.icone} alt={item.name} width={25} height={25}/>
                </li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
