'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname();
    console.log(currentPath)

  return (
    <nav className="border-2 border-black-600 flexBetween max-container padding-container relative z-30 py-5">
        <div className="w-full h-28 border-b-[1px] border-black-300">
            <div className="text-lg lg:flex-grow">
                <Link href="/"className="flex items-center flex-shrink-0 text-white mr-10"><Logo /></Link>
                <Link href="/about" className="block mt-4 lg:inline-block lg:mt-o text-zinc-500 hover:text-zinc-800 transition-colors mr-4">About/Missions</Link>
                <Link href="/connect" className="block mt-4 lg:inline-block lg:mt-o text-white hover:text-white mr-4">Connect</Link>
                <Link href="/media" className="block mt-4 lg:inline-block lg:mt-o text-white hover:text-white mr-4">Media</Link>
                <Link href="/team" className="block mt-4 lg:inline-block lg:mt-o text-white hover:text-white mr-4">Meet The Team</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
