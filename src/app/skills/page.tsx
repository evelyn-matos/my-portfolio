"use client"
import React from 'react'
import { SkillItem } from '@/services/skillsItem';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image';
import AccordionSoftSkill from '@/components/AcordionSkill';
import { styled } from '@mui/material/styles';
import { Tab, Tabs,} from '@mui/material';



export default function Skills() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

 


  return (
    <main className='w-full  lg:max-w-[900px] xl:max-w-[1100px]'>
      <h1 className="block text-3xl mb-3 md:text-5xl leading-10 md:mb-6 text-black dark:text-white ">Minhas <span className="font-indie text-3xl md:text-5xl text-pink">Habilidades</span></h1>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#565656' }} >
          <Tabs onChange={handleChange} value={value} className='tabsRoot' sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#b20082'
              },
            '& .MuiTab-textColorPrimary': {
              color: '#565656',
              
              '&.Mui-selected': {
                color: '#b20082'
              }
            }

            
            
          }}>
            <Tab label="Hard Skills" value="1" className='tabRoot'/>
            <Tab label="Soft Skills" value="2" className='tabRoot'/>
          </Tabs>
        </Box>
        <TabPanel value="1">
          <div >
          {SkillItem.map((skill, index) => (
            <section key={index} className='last:mb-20 '>
              <span className=' text-pink p-3 mb-5 border-b border-b-gray'>{skill.title}</span>
              <div className='mt-10 mb-10 grid gap-3 grid-cols-2 grid-rows-2 md:grid-cols-4  lg:grid-rows-1'>
                {skill.tecnologias.map((item, index) => (
                  <div key={index} className='w-[120px] h-32 md:w-[150px] md:h-44 flex flex-col items-center justify-evenly rounded-md border border-gray shadow-md shadow-gray dark:shadow-black text-black dark:text-white'>
                    <Image src={item.icone} alt={item.name} width={50} height={50} /> 
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>   
            </section>
          ))}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <section>
            <AccordionSoftSkill/>
          </section>
        </TabPanel>
      </TabContext>
    </Box>
    </main>
  )
}
