import React from 'react'

const OurPurpose = () => {
  return (
    <section>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:px-[78px] px-6 pt-28 items-center pb-36 '>
            <div>
            <h1 className='font-[poppins] lg:text-[45px] text-[25px] font-semibold'>What We're All
           <br className='lg:flex hidden'/> About</h1>
        </div>
      <div className='flex gap-8 items-center'>
        <div className='border-[1px] h-[100px] border-[#ff9635]'></div>

        <div className='text-[#22323d]'>
            <p>We're a community of learners, builders, and dreamers. Together, we push boundaries, <br />
             share knowledge, and turn code into change</p>
        </div>
      </div>
        </div>
    </section>
  )
}

export default OurPurpose