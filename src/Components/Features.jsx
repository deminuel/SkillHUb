import React, { useEffect } from 'react'
import { FaBook, FaClock, FaCrown } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: true });
  }, []);

  return (
    <section
      data-aos="zoom-in"
      className='flex flex-col justify-center relative font-[poppins] items-center px-6 lg:px-[78px] 
      bg-[url("https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-09-free-img.jpg")] 
      bg-cover bg-center lg:py-20 py-10'
    >


      <div className='bg-[#ecf0f2]/90 absolute inset-0'></div>


      <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20 relative z-50 w-full max-w-6xl'>


       <div className='flex lg:flex-row flex-col lg:gap-4 items-center lg:items-start group cursor-default'>

  <span className='bg-[#ff9635] flex items-center justify-center rounded-full h-[40px] w-[40px] 
        flex-shrink-0 shadow-md group-hover:scale-110 transition-all duration-200'>
            <FaCrown className='text-white text-xl transition duration-200 ease-in hover:text-slate-500' />
  </span>

  <div className='mt-4 lg:mt-0 max-w-[350px]'>
    <h1 className='font-semibold text-[18px] pb-3 group-hover:text-[#ff9635] transition'>
      Learn From Industry Leaders
    </h1>
    <p className='text-[15px] leading-[1.6]'>
      Learn from industry leaders and experts who bring real-world experience to our courses.
      Gain practical insights, stay updated on industry trends, and network with professionals 
      in your field.
    </p>
  </div>

</div>



        <div className='flex lg:flex-row flex-col lg:gap-5 items-start group cursor-default'>
        <span className='bg-[#ff9635] flex items-center justify-center rounded-full h-[40px] w-[40px] 
            flex-shrink-0 shadow-md group-hover:scale-110 transition-all duration-200'>
        <FaClock className='text-white text-xl transition duration-200 ease-in hover:text-slate-500' />
  </span>


          <div className='mt-4 lg:mt-0'>
            <h1 className='font-semibold text-[18px] pb-3 group-hover:text-[#ff9635] transition'>
              Learn at Your Own Pace
            </h1>
            <p className='text-[15px] leading-[1.6]'>
              Learn at your own pace with our flexible online courses. Access course materials, watch
              video lectures, and complete assignments on your schedule. Revisit concepts as needed 
              and fit learning into your busy life.
            </p>
          </div>
        </div>


        <div className='flex lg:flex-row flex-col lg:gap-5 items-start group cursor-default'>
          <span className='bg-[#ff9635] flex items-center justify-center rounded-full h-[40px] w-[40px] 
            flex-shrink-0 shadow-md group-hover:scale-110 transition-all duration-200'>
                <FaBook className='text-white text-xl transition duration-200 ease-in hover:text-slate-500' />
        </span>

          <div className='mt-4 lg:mt-0'>
            <h1 className='font-semibold text-[18px] pb-3 group-hover:text-[#ff9635] transition'>
              Professional Certification
            </h1>
            <p className='text-[15px] leading-[1.6]'>
              Boost your career with our professional certifications. Our expert-designed courses 
              ensure you're job-ready and equipped with the latest industry skills. Showcase your 
              certification on your resume, LinkedIn profile, or portfolio to unlock new career 
              opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className='relative z-50 text-center max-w-3xl mt-10'>
        <p className='text-[17px] leading-[1.7] font-medium text-slate-700'>
          Our expert instructors are committed to your success, providing guidance and support 
          throughout your learning journey.
        </p>
      </div>

    </section>
  )
}

export default Features;
