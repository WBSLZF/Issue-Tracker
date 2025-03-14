import Link from 'next/link'
import React from 'react'
import { IoMenu } from "react-icons/io5";
const NavBar = () => {
  const links = [
    {"href": "/", "label": <IoMenu />},
    {"href": "/dashboard", "label": "Dashboard"},
    {"href": "/issues", "label": "Issues"},
  ]
  return (
    <nav className='flex space-x-6'>
        <ul className = "flex space-x-6 pl-5 top-2 h-14 border-b-2 border-b-gray-500 w-full items-center">
            {links.map(link => (
                <Link 
                    className='text-zinc-500 hover:text-zinc-800' 
                    href={link.href}
                    key={link.href}>{link.label}</Link>))}
        </ul>
    </nav>
  )
}

export default NavBar