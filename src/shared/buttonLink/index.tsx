import Link from 'next/link'
import React from 'react'

type Props = {
    children: string,
    link: string
}

export default function ButtonLink({children, link}: Props) {
  return (
    <Link href={link} className='p-2 text-black dark:text-white rounded-3xl border border-gray  hover:bg-pink hover:border-pink'>
        {children}
    </Link>
  )
}
