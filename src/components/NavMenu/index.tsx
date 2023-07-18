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
        <nav className='flex  items-center  xl:justify-center  right-0  fixed h-max bottom-0 mt-auto  lg:right-[2%] z-50 top-0 w-screen lg:w-16 lg:max-w-md lg:h-screen '>
            <BottomNavigation 
                sx={{background: 'transparent', height:'400px'}}
                value={path} 
                onChange={handleChange} 
                classes={{root: `w-full h-[50px] px-7 py-8 flex items-center justify-evenly bg-background-dark/10  backdrop-blur-sm px- md:px-40  lg:h-[400px] lg:px-0  lg:flex-col   lg:justify-center  lg:rounded-full lg:border lg:border-gray lg:bg-background-ligth/10 lg:dark:bg-background-dark/10`}}
                
            >
                
                <BottomNavigationAction
                    sx={{minWidth: '20px'}}
                    classes={{ selected: 'text-pink ', root: `p-0 m-0 ml-[20px] lg:ml-0 text-gray hover:text-pink transition duration-700 ease-in-out` }}
                    label='Home'
                    value="/"
                    icon={
                        <Tooltip title='Home'>
                            <Icones.HomeIcon 
                                className='w-[20px]'
                                classes={{root: `${path === '/' ? 'text-pink' : 'text-gray' }`}}
                             />
                        </Tooltip>
                    
                    }      
                 />
                
               

                <BottomNavigationAction
                    sx={{minWidth: '20px'}}
                    classes={{ selected: 'text-pink ', root: `p-0 m-0 ml-[-30px] lg:ml-0 text-gray hover:text-pink transition duration-700 ease-in-out` }}
                    label='Sobre'
                    value="/sobre"
                    icon={
                        <Tooltip title='Sobre'>
                            <Icones.PersonIcon 
                                className='w-[20px] p-0 m-0'
                                classes={{root: `${path === '/sobre' ? 'text-pink' : 'text-gray' }`}}    
                            />
                                
                        </Tooltip>
                    }
                    
                />

                <BottomNavigationAction
                    sx={{minWidth: '20px'}}
                    classes={{ selected: 'text-pink ', root: `p-0 m-0 ml-[-30px] lg:ml-0 text-gray hover:text-pink transition duration-700 ease-in-out` }}
                    label='Estudos'
                    value="/estudos"
                    icon={
                        <Tooltip title='Estudos'>
                            <Icones.AutoStoriesIcon 
                                className='w-[20px] p-0 m-0' 
                                classes={{root: `${path === '/estudos' ? 'text-pink' : 'text-gray' }`}}
                            />
                      
                        </Tooltip>
                }
                    
                />

                <BottomNavigationAction 
                    sx={{minWidth: '20px'}}
                    classes={{ selected: 'text-pink ', root: `p-0 m-0 ml-[-30px] lg:ml-0 text-gray hover:text-pink transition duration-700 ease-in-out` }}
                    label='Skills'
                    value="/skills" 
                    icon={
                        <Tooltip title='Skills'>
                            <Icones.PsychologyIcon 
                                className='w-[20px] p-0 m-0'
                                classes={{root: `${path === '/skills' ? 'text-pink' : 'text-gray' }`}}
                            />
                        
                        </Tooltip>
                    } 
                    
                />

                <BottomNavigationAction 
                    sx={{minWidth: '20px'}}
                    classes={{ selected: 'text-pink ', root: `p-0 m-0 ml-[-30px] lg:ml-0 text-gray hover:text-pink transition duration-700 ease-in-out` }}
                    label='Projetos'
                    value="/projetos" 
                    icon={
                        <Tooltip title='Projetos'>
                            <Icones.SplitscreenIcon 
                                className='w-[20px] p-0 m-0'
                                classes={{root: `${path === '/projetos' ? 'text-pink' : 'text-gray' }`}}
                            />
                        </Tooltip>
                    } 
                    
                />

                <BottomNavigationAction 
                    sx={{minWidth: '20px'}}
                    classes={{ selected: 'text-pink ', root: `p-0 m-0 ml-[-30px] lg:ml-0 text-gray hover:text-pink transition duration-700 ease-in-out` }}
                    label='Contato'
                    value="/contato" 
                    icon={
                        <Tooltip title='Contato'>
                            <Icones.EmailIcon 
                                className='w-[20px] p-0 m-0'
                                classes={{root: `${path === '/contato' ? 'text-pink' : 'text-gray' }`}}
                            />
                        </Tooltip>
                    } 
                    
                />

        </BottomNavigation>
    </nav>
    )
  }