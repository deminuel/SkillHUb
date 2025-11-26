import React from 'react'

const Community = () => {
  return (
    <section className=' h-[600px] bg-gray-200 flex flex-col justify-center items-center gap-14 px-6 '>
        <h1 className='text-5xl font-bold'>Join Our Community</h1>
        <span>Enter your email address to register to our newsletter subscription delivered on regular basis!</span>
       <div className='lg:flex space-y-3 gap-6'>
        <input className='w-[350px] h-[48px] indent-3' type="email" placeholder='Enter your email' />
       <button className='lg:w-[180px] w-[100%] bg-orange-400 rounded-3xl text-white font-bold md:w-[80%]'>SUBSCRIBE</button>
       </div>

    </section>
  )
}

export default Community;