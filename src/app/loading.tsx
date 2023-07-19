"use client"

import React from 'react'

export default function Loading() {
  return (
    <main className='w-full  lg:max-w-[900px] xl:max-w-[1100px] h-screen flex items-center justify-center bg-background-ligth dark:bg-background-dark'>
        <span className='w-5 h-5 rounded-full bg-pink animate-bounce'></span>
    </main>
  )
}
