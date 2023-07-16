'use client'
import * as React from 'react';
import './styles.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Icones } from '@/shared/iconsNav';
import {useRouter, usePathname} from 'next/navigation'




export default function MenuNav() {
    const path = usePathname();
    const route = useRouter();

    const [value, setValue] = React.useState(path);
    
    

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        route.push(newValue)
        setValue(newValue);
    };

   

    return (
        <nav className='flex w-full h-[90px] p-5 fixed left-0 bottom-0 bg-background-ligth dark:bg-background-dark md:bg-transparent md:absolute md:top-0 md:w-[500px] md:ml-[30%] md:items-center md:justify-center  '>
            <BottomNavigation value={path} onChange={handleChange}  className='p-2 ' >
                
                <BottomNavigationAction
                    label="Home"
                    value="/"
                    icon={<Icones.HomeIcon />}
                    
                       
                 />
                
               

                <BottomNavigationAction
                    label="Sobre"
                    value="/sobre"
                    icon={<Icones.PersonIcon />}
                />

                <BottomNavigationAction
                    label="Estudos"
                    value="/estudos"
                    icon={<Icones.AutoStoriesIcon />}
                />

                <BottomNavigationAction 
                    label="Skills" 
                    value="/skills" 
                    icon={<Icones.PsychologyIcon />} 
                />

                <BottomNavigationAction 
                    label="Projetos" 
                    value="/projetos" 
                    icon={<Icones.SplitscreenIcon />} 
                />

                <BottomNavigationAction 
                    label="Contato" 
                    value="/contato" 
                    icon={<Icones.EmailIcon />} 
                />

        </BottomNavigation>
    </nav>
    )
  }