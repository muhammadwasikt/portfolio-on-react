import React from 'react'
import HeroImage from '/assets/hero-image.png'
import Button from '../components/common/button'

const Hero = () => {
  const clicks = ()=>{
    window.open('https://firebasestorage.googleapis.com/v0/b/portfolio-3147e.appspot.com/o/My%20Resume.pdf?alt=media&token=bd553e49-8ee0-448c-b375-7b68ba5b0082', '_blank')
  }
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-contain transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mohammad Wasi</span>
            , Web Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <Button title='Contact with me' />
            <Button title='Resume' isClassName click={clicks} />
        </div>

    </div>
  )
}

export default Hero