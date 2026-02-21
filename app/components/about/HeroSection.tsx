import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center text-center h-30 sm:h-40 md:h-50 lg:h-70">
        <p className='text-[12px] sm:text-[16px] md:text-[18px] font-bold text-[#2AB7B1]'>OUR STORY</p>
        <h1 className='text-[18px] sm:text-[25px] md:text-[30p x] lg:text-[40px] font-extrabold'>Every childhood should be <span className='text-[#E96D92]'>filled with joy.</span></h1>
        <p className='text-xs sm:text-sm md:text-md lg:text-lg text-slate-500'>At Kidozy, we believe that children's clothing should be as vibrant, comfortable, and carefree as childhood itself.</p>
    </div>
  )
}

export default HeroSection