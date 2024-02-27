'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname();
    console.log(currentPath)

  return (
    <nav className="w-full h-55 border-b-[0px]">
        <div className="max-h-screen-2xl mx-25 px-10">
            <div className="text-right text-2xl lg:flex-grow">
                <Link href="/"className="flex items-center flex-shrink-0 mr-10"><Logo /></Link>
                <Link href="/about" className="flex mt-4 lg:inline-block lg:mt-o text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-end">About/Missions</Link>
                <Link href="/connect" className="flex mt-4 lg:inline-block lg:mt-o text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-end">Connect</Link>
                <Link href="/media" className="flex mt-4 lg:inline-block lg:mt-o text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-end">Media</Link>
                <Link href="/team" className="flex mt-4 lg:inline-block lg:mt-o text-black hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-end">Meet The Team</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
