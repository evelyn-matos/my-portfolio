import Link from 'next/link'
import React from 'react'

type Props = {
    children: string,
    link: string
}

export default function ButtonLink({children, link}: Props) {
  return (
    <Link 
      target="_blank"
      href={link} 
      className='p-2 text-black dark:text-white rounded-3xl border border-gray bg-background-ligth dark:bg-background-dark hover:border-pink transition delay-700 ease-in-out  '>
        {children}
    </Link>
  )
}
