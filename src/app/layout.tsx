import './global.css';
import { Montserrat } from 'next/font/google';
import MenuNav from '@/components/NavMenu';
import Header from '@/components/header';
import { Suspense } from 'react';
import Loading from './loading';


const Mont =  Montserrat({ subsets: ['latin'] })


export const metadata = {
  title: 'Evelyn Matos',
  description: 'Portifólio Evelyn Matos, desenvolvedora Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id='html' >
      
      <body  className={`${Mont.className}  max-w-[1248px] flex flex-col  mx-auto p-5 bg-background-ligth dark:bg-background-dark`}>
        <Header/>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
        <MenuNav/>
      </body>
    </html>
  )
}
