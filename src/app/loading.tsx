"use client"

import React from 'react'

export default function Loading() {
  return (
    <main className='w-full md:max-w-900 lg:max-w-[1150px] flex items-center justify-center bg-background-ligth dark:bg-background-dark'>
        <span className='w-5 h-5 rounded-full bg-pink animate-bounce'></span>
    </main>
  )
}
