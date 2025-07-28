import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/*........Left Side .....*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4' py-10 m-auto>
        <p className='text-4xl text-white font-semibold leading-tight'> 
            Book Appointment <br /> with Trusted Doctors
        </p>
        <div className='flex gap-3 items-center text-white font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Simply browse through our extensive list of trusted doctors, <br />schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='flex item-center gap-3 bg-white px-8 py-3 rounded-full text-gray-600 hover:scale-105 transition-all duration-300'>Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
      </div>

      {/*........Right Side .....*/}

      <div className='md:w-1/2 relative'> 
        <img className='w-full h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
