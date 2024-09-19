import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './common/button'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
const [isResponsive , setIsResponsive] = useState(false)

const click = ()=>{
  setIsResponsive(!isResponsive)
}
const sendMail = ()=>{
  window.location.href = "mailto:wasikhatri11@gmail.com?subject=Inquiry from Portfolio&body=Hello Wasi,";
}

let resposive = ` w-[600%] h-[300px] flex flex-col leading-[45px] mx-auto my-10 bg-[#0A1128] z-10 p-5`

  return (
    <nav className='sticky top-0 bg-[#080808] z-10 text-white px-8 md:px-16 lg:px-24 flex justify-center '>
        <div className={isResponsive ? 'bg-black absolute container py-2 px-8 flex justify-center md:justify-between ':'container py-2 flex justify-center md:justify-between items-center'}>
            <div className='text-2xl font-bold '>WASI</div>
            <div className={isResponsive ? resposive : `space-x-6 xl:inline-flex md:inline-flex sm: hidden items-center`}>
                <NavLink onClick={click} to='/home' className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Home</NavLink>
                <NavLink onClick={click} to="/about" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>About Me</NavLink>
                <NavLink onClick={click} to="/services" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Services</NavLink>
                <NavLink onClick={click} to="/project" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Projects</NavLink>
                <NavLink onClick={click} to="/contact" className={isResponsive ? 'hover:text-gray-400 border-b-2':'hover:text-gray-400'}>Contact</NavLink>
                <Button title='Contact Me' isResponsive={isResponsive} click={sendMail} />
            </div>
            <div className="xl:hidden md:hidden text-3xl flex justify-end w-11/12">
                {isResponsive ? <AiOutlineCloseCircle onClick={click}/> : <HiMiniBars3BottomRight onClick={click}/>}
            </div>
        </div>
    </nav>
  )
}

export default Navbar