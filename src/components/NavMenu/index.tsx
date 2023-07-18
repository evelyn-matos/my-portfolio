'use client'
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Tooltip from '@mui/material/Tooltip';
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
        <nav className='flex flex-col items-center  xl:justify-center  right-0  fixed h-max bottom-0 mt-auto  xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
            <BottomNavigation 
                value={path} 
                onChange={handleChange}  
                className='flex w-full   bg-background-dark/10  backdrop-blur-sm xl:flex-col items-center  xl:justify-center  px-0 md:px-40 xl:px-0 h-[50px] xl:h-[400px] py-8  md:text-3xl xl:text-xl xl:rounded-full xl:border xl:border-gray' >
                
                <BottomNavigationAction
                    className='  text-gray hover:text-pink transition duration-700 ease-in-out '
                    label='Home'
                    value="/"
                    icon={
                        <Tooltip title='Home'>
                            <Icones.HomeIcon className='w-[20px]'  />
                        </Tooltip>
                    
                    }
                    
                    
                       
                 />
                
               

                <BottomNavigationAction
                    className='w-[30px] p-0 m-0 ml-[-30px] xl:ml-0  text-gray hover:text-pink transition duration-700 ease-in-out'
                    label='Sobre'
                    value="/sobre"
                    icon={
                        <Tooltip title='Sobre'>
                            <Icones.PersonIcon className='w-[20px] p-0 m-0' />
                        </Tooltip>
                    }
                    
                />

                <BottomNavigationAction
                    className='w-[30px] p-0 m-0 ml-[-30px] xl:ml-0  text-gray hover:text-pink transition duration-700 ease-in-out'
                    label='Estudos'
                    value="/estudos"
                    icon={
                        <Tooltip title='Estudos'>
                            <Icones.AutoStoriesIcon className='w-[20px] p-0 m-0' />
                        </Tooltip>
                }
                    
                />

                <BottomNavigationAction 
                    className='w-[30px] p-0 m-0 ml-[-30px] xl:ml-0  text-gray hover:text-pink transition duration-700 ease-in-out'
                    label='Skills'
                    value="/skills" 
                    icon={
                        <Tooltip title='Skills'>
                            <Icones.PsychologyIcon className='w-[20px] p-0 m-0'/>
                        </Tooltip>
                    } 
                    
                />

                <BottomNavigationAction 
                    className='w-[30px] p-0 m-0 ml-[-30px] xl:ml-0  text-gray hover:text-pink transition duration-700 ease-in-out'
                    label='Projetos'
                    value="/projetos" 
                    icon={
                        <Tooltip title='Projetos'>
                            <Icones.SplitscreenIcon className='w-[20px] p-0 m-0'/>
                        </Tooltip>
                    } 
                    
                />

                <BottomNavigationAction 
                    className='w-[30px] p-0 m-0 ml-[-30px] xl:ml-0  text-gray hover:text-pink transition duration-700 ease-in-out' 
                    label='Contato'
                    value="/contato" 
                    icon={
                        <Tooltip title='Contato'>
                            <Icones.EmailIcon className='w-[20px] p-0 m-0'/>
                        </Tooltip>
                    } 
                    
                />

        </BottomNavigation>
    </nav>
    )
  }