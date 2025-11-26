import React from 'react'
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Copyright = () => {
  return (
    <>
    <footer className=''>
        <ul className='lg:h-[] lg:flex gap-3 justify-between white lg:p-11 p-10 px-3 lg:text-left text-center '>
            <li className='lg:flex flex-col gap-10'>
              <img className='w-36 lg:m-0 m-auto' src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png" alt="" />
            <p className='lg:w-[500px] lg:text-left text-center lg:text-[17px] text-sm lg:pt-0 pt-6'>Gain the practical, in-demand skills, you need to advance your carer, unlock your creativity and succeed in today's digital world.</p>
            <div className='flex gap-2 lg:pl-0 pl-[150px] lg:pt-0 pt-24 md:pl-[340px]'>
               <FaFacebook /> 
              <FaTwitter />  
              <FaPinterest />
              <FaYoutube />
            
            </div>
            
            </li>
            <ul className='lg:flex flex-col'>
            <li className='font-semibold text-2xl lg:pt-0 pt-20'>Popular Courses</li>
            <div className='lg:pt-6 pt-5'>
            <li className='hover:cursor-pointer hover:text-[#007991]'>UI/UX Design Fundmentals</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>Digital Marketing</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>HTML5/CSS3 Essentials</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>JavaScript Development</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>WordPress Basic Tutorial</li>
            <li className='hover:cursor-pointer hover:text-[#007991]'>Cybersecurity</li>
            </div>
            </ul>
            <ul className=''>
            <li className='font-semibold text-2xl lg:pt-0 pt-14'>Contact Info</li>
            <div className='lg:pt-6 pt-5'>
            <li className='font-semibold'>Address</li>
            <li>Soun Ajagungbade, Bodija Ibadan.</li>
            <li className='font-semibold'>Phone</li>
            <li>929-242-6868</li>
            <li className='font-semibold'>Email</li>
            <li>contact@info.com</li>
            </div>
            </ul>
        </ul>
        
       
       
    
    </footer>
     <div className='border-[0.1px] border-t-0 mb-5'></div>
        <div className='lg:flex lg:justify-around h-10 px-3'> 
        <p>copyright&copy; 2025</p>
        <span>Powered by SkillHub</span>
        </div>
        </>
  )
}

export default Copyright;