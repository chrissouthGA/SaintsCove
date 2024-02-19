import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='flex space-x-6 border-b'>
        <Link href="/"><a><Logo /></a></Link>
        <ul className='flex space-x-6'>
            <li><Link href="/"><a>About/Missions</a></Link></li>
            <li><Link href="/connect"><a>Connect</a></Link></li>
            <li><Link href="/media"><a>Media</a></Link></li>
            <li><Link href="/team"><a>Meet The Team</a></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
