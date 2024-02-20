'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname();
    console.log(currentPath)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
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
