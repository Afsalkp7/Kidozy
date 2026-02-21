import React from 'react'

const PhilosophySection = () => {
    return (
        <>
            <div className="flex flex-col justify-center text-center h-30 sm:h-30 md:h-30 lg:h-40 mt-5">
                <h2 className='text-[18px] sm:text-[25px] md:text-[28p x] lg:text-[35px] font-medium'>Our Core Philosophy</h2>
                <p className='text-xs sm:text-sm md:text-md lg:text-lg text-slate-500'>We don't just make clothes; we craft memories by focusing on what matters most for your little ones.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 gap-10 justify-center items-center text-center w-full main-padding lg:gap-10">
                <div className="h-none md:h-20">
                    <div className="flex flex-col gap-1 text-center justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#2AB7B1" stroke="" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                        <h3 className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">Skin-First Fabrics</h3>
                        <p className="text-sm text-slate-500">We prioritize 100% GOTS certified organic cotton and bamboo blends that are gentle on sensitive skin and safe for the planet.</p>
                    </div>
                </div>
                <div className="h-none md:h-20">
                    <div className="flex flex-col gap-1 text-center justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#E96D92" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-laugh-icon lucide-laugh"><circle cx="12" cy="12" r="10" /><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                        <h3 className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">Kid-Centric Design</h3>
                        <p className="text-sm text-slate-500">Tags that don't itch, snaps that stay put, and waistbands that stretch—every detail is tested by kids, for kids.</p>
                    </div>
                </div>
                <div className="h-none md:h-20">
                    <div className="flex flex-col gap-1 text-center justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#2AB7B1" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf-icon lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                        <h3 className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">Ethical Manufacturing</h3>
                        <p className="text-sm text-slate-500">We partner with fair-trade factories where workers are treated with dignity, ensuring every garment is made with love.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PhilosophySection