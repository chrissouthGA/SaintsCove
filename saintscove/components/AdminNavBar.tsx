import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const AdminNavBar = () => {
     const currentPath = usePathname();
     console.log(currentPath)  

    return (
        <nav className="w-full h-55 border-b-[0px]">
            <div className="max-h-screen-2xl mx-25 px-10">
                <div className="text-right text-2xl lg:flex-grow">
                    <Link href="/" className="flex mt-4 lg:inline-block lg:mt-o text-white hover:text-zinc-400 transition-colors mr-4 font-bold justify-between items-end">HOME</Link>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavBar
