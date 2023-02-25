import React from 'react'

import { navLinks } from '../constants'
import {close , logo , menu} from '../assets'


function Navbar() {
    console.log(navLinks)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt = "addthistocc" />
    <ul className='list-none sm:flex hidden justify-end otems-center flex-1'>
        {navLinks.map((navLink)=>{
            <li className='mr-10 text-[16px] font-poppins font-normal cursor-pointer text-white' > 
                key = {navLink.id}
                <a href={`#$navLink.id`} > 
                {navLink.title}
                </a>
            </li>
        })}
    </ul>
    </nav>
  )
}

export default Navbar
