import React from 'react'

const CounterSection = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center mt-0 sm:mt-5 md:mt-3 lg:mt-0'>
            <div className="">
                <img src={"/about/counter-kid-image.png"} className='w-50 sm:w-200 ' />
            </div>
            <div className="flex flex-col gap-2 ">
                <h2 className='text-[18px] md:text-[20px] lg:text-[30px] font-medium text-center sm:text-start'>Born from a simple wish</h2>
                <p className='text-[12px] md:text-[14px] lg:text-[15px] text-slate-500'>Kidozy began in a small home studio when a group of designers and parents realized that finding high-quality, sustainably made, and fun clothes for children shouldn't be a chore.
                    <p className='mt-2'>We wanted to create a brand that speaks the language of kids—color, softness, and freedom of movement. From our first collection of organic cotton basics to our current full-range seasonal looks, our mission has remained the same: <span className="text-[#E96D92] font-bold">Wear the Joy.</span></p>

                </p>
                <div className="flex justify-start gap-4 items-start text-start">
                    <div className="flex flex-col">
                        <p className='text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#2AB7B1]'>50k+</p>
                        <p className='text-[10px] sm:text-[12px] md:text-[14px] text-slate-500'>HAPPY FAMILIES</p>
                    </div>
                    <div className="">
                        <p className='text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]  font-bold text-[#E96D92]'>12+</p>
                        <p className=' sm:text-[12px] md:text-[14px] text-[10px]  text-slate-500'>COLLECTIONS</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CounterSection