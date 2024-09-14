import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import Button from '../components/common/button'
import Input from '../components/common/input'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:wasikhatri11@gmail.com" className='hover:underline'>
                wasikhatri11@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+92 327 8455637</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Surjani Town Karachi Pakistan</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <Input types='text' placeholders='Enter your name' />
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <Input types='email' placeholders='Enter your email' />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    
                </div>
                <Button title='Send' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact