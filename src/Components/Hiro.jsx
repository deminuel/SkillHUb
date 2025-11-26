import React from 'react'

const Hiro = () => {
  return (
    <section className='bg-gray-200 lg:h-[400px]'>
        <div className='lg:flex lg:p-20 p-5 gap-4'>
            <div className='flex flex-col gap-8 lg:ml-24 ml:0 lg:pr-16 pr:0 '>
                <span className='font-bold'>Teachers With Vision</span>
                <h2 className='font-bold text-4xl lg:w-80 '>Our Instructors</h2>
            </div>
            <div className='border-l-2 border-orange-400  '>
            
                <p className='   lg:pl-11 pl-8 lg:mt-0 mt-6 lg:text-[15px] lg:pt-8 text-sm'>Our Instructor team is united by a single, bold vision: to make high quality, real-world learning accessible to anyone.</p>
            </div>
        </div>
    </section>
  )
}

export default Hiro;