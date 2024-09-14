import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './common/button'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
const [isResponsive , setIsResponsive] = useState(false)

const click = ()=>{
  setIsResponsive(true)
}
const click2 = ()=>{
  setIsResponsive(false)
}

let resposive = 'w-[600%] h-[45vh] flex flex-col leading-[45px] mx-auto my-10 bg-[#0A1128] z-10 p-5'

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 flex justify-center '>
        <div className={isResponsive ? 'absolute h-60 container px-6 py-2 flex justify-center md:justify-between items-top':'container py-2 flex justify-center md:justify-between items-center'}>
            <div className='text-2xl font-bold '>WASI</div>
            <div className={isResponsive ? resposive : 'space-x-6 xl:inline-flex md:inline-flex sm: hidden items-center'}>
                <NavLink onClick={click2} to='/home' className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Home</NavLink>
                <NavLink onClick={click2} to="/about" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>About Me</NavLink>
                <NavLink onClick={click2} to="/services" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Services</NavLink>
                <NavLink onClick={click2} to="/project" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Projects</NavLink>
                <NavLink onClick={click2} to="/contact" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Contact</NavLink>
                <Button title='Contact Me' isResponsive={isResponsive} />
            </div>
            <div className="xl:hidden md:hidden text-3xl flex justify-end w-11/12">
                <HiMiniBars3BottomRight className={ isResponsive && "hidden"} onClick={click} />
                <AiOutlineCloseCircle className={isResponsive ? 'inline-flex': 'hidden'} onClick={click2} />
            </div>
        </div>
    </nav>
  )
}

export default Navbar