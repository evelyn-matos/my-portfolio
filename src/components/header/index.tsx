"use client"

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SwitchButton from '../SwitchButton ';
import { Icones } from '@/shared/iconsNav';

export default function Header() {

    type PageActiveProps = {
        name: string,
        icon: any
    }

    const path = usePathname()
    const [pageActive, setPageActive] = useState<PageActiveProps>()

    useEffect(() => {
        switch (path) {
            case '/':
                setPageActive(
                    {
                    name: 'Home',
                    icon: <Icones.HomeIcon/>
                    }
                );
                break;

            case '/sobre':
                setPageActive({
                    name: 'Sobre',
                    icon: <Icones.PersonIcon/>
                });
                break;

            case '/estudos':
                setPageActive({
                    name: 'Estudos',
                    icon: <Icones.AutoStoriesIcon/>
                });
                break;

            case '/skills':
                setPageActive({
                    name: 'Skills',
                    icon: <Icones.PsychologyIcon/>
                });
                break;

            case '/projetos':
                setPageActive({
                    name: 'Projetos',
                    icon: <Icones.SplitscreenIcon/>
                });
                break;
            
            case '/contato':
                setPageActive({
                    name: 'Contato',
                    icon: <Icones.EmailIcon/>
                });

        }


    }, [path])


  return (
    <header className='w-full lg:max-w-[900px] xl:max-w-[1100px] h-[50px] flex justify-between items-center mb-3 md:mb-10 '>
        <div>
            <div className=' flex items-center justify-between p-2 border border-gray rounded-3xl text-pink'>
                {pageActive?.icon}
                <p className='ml-2'>{pageActive?.name}</p>
            </div>
        </div>
        <div>
            <SwitchButton />
        </div>
    </header>
  )
}
