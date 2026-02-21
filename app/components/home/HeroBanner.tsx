export default function HeroBanner() {
    return (
        <>
        <div className="flex flex-col lg:flex-row justify-between main-padding items-center lg:items-start text-center lg:text-start gap-10 mt-3 md:mt-5">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center lg:items-start justify-center ">
                <span className="text-[10px] sm:text-[14px] md:text-sm font-bold text-[#E96D92] tracking-wide">NEW COLLECTION 2026</span>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">Wear the <span className="text-[#2AB7B1]">Joy</span>,<br/> Every Single Day.</h1>
                <span className="text-sm md:text-lg lg:text-xl">Discover a world of playful, comfortable, and stylish clothing designed for little adventurers aged 0-12.</span>
                <div className="flex justify-between">
                    <button className="p-2 md:p-3 text-sm md:text-md rounded-2xl text-center bg-[#2AB7B1] text-[#ffff]">Explore Collections</button>
                    <button className="p-2 md:p-3 text-sm md:text-md rounded-2xl text-center bg-[#ffff] text-slate-500">Our Story</button>
                </div>
            </div>
            <div className="relative">
                <img src={"/home/kidozy-banner-hero.png"} className="p-2 rounded-3xl shadow-[0_1px_30px_-15px_black] rotate-2"/>
                <div className="flex bg-white py-1 px-1 md:py-2 md:px-3 rounded-4xl absolute items-center -right-5 bottom-5 shadow-[10px_1px_30px_-15px_black]">
                    <div className="bg-[#E96D92] p-1 rounded-4xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffff" stroke="#E96D92" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                    </div>
                    <div className="flex flex-col mx-3">
                        <p className="text-[8px] md:text-[10px] text-slate-500 text-start">Loved by parents</p>
                        <p className="text-[12px] md:text-[14px] text-black font-bold text-start">10k Happy Kids</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}