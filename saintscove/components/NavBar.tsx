import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-10"><Logo /></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <Link href="/about" className="block mt-4 lg:inline-block lg:mt-o text-white hover:text-white mr-4">About/Missions</Link>
                <Link href="/connect" className="block mt-4 lg:inline-block lg:mt-o text-white hover:text-white mr-4">Connect</Link>
                <Link href="/media" className="block mt-4 lg:inline-block lg:mt-o text-white hover:text-white mr-4">Media</Link>
                <Link href="/team" className="block mt-4 lg:inline-block lg:mt-o text-white hover:text-white mr-4">Meet The Team</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
