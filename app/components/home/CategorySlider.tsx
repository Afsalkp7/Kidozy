import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"

export default function CategorySlider() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
                    <div className="relative h-65 md:h-70 lg:h-80 w-65 md:w-70 lg:w-80 rounded-xl bg-[url('/home/newborn-category.png')] bg-cover bg-center shadow-[inset_0_-100px_20px_-10px_rgba(0,0,0,0.4)]">
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                        <div className="absolute bottom-5 left-8 text-white leading-3">
                            <h3 className="text-[18px]  md:text-[20px] lg:text-2xl font-bold mb-2">Newborn Essentials</h3>
                            <p className="text-white/80 text-[10px] md:text-[13px] lg:text-[15px]">Softness for the first days (0-12M)</p>
                            <p className="text-[12px] md:text-[14px] inline-flex items-center gap-2 font-bold text-[#E96D92]">
                                View Details <ArrowRight />
                            </p>
                        </div>
                    </div>
            </CarouselItem>
            
            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
                    <div className="relative h-65 md:h-70 lg:h-80 w-65 md:w-70 lg:w-80 rounded-xl bg-[url('/home/elder-category.png')] bg-cover bg-center shadow-[inset_0_-100px_20px_-10px_rgba(0,0,0,0.4)]">
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                        <div className="absolute bottom-5 left-8 text-white leading-3">
                            <h3 className="text-[18px]  md:text-[20px] lg:text-2xl font-bold mb-2">Toddler Trends</h3>
                            <p className="text-white/80 text-[10px] md:text-[13px] lg:text-[15px]">Durable play wear (1-4 Years)</p>
                            <p className="text-[12px] md:text-[14px] inline-flex items-center gap-2 font-bold text-[#E96D92]">
                                View Details <ArrowRight />
                            </p>
                        </div>
                    </div>
            </CarouselItem>

            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center">
                    <div className="relative h-65 md:h-70 lg:h-80 w-65 md:w-70 lg:w-80 rounded-xl bg-[url('/home/kids-category.png')] bg-cover bg-center shadow-[inset_0_-100px_20px_-10px_rgba(0,0,0,0.4)]">
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-xl"></div>
                        <div className="absolute bottom-5 left-8 text-white leading-3">
                            <h3 className="text-[18px]  md:text-[20px] lg:text-2xl font-bold mb-2">Kids Fashion</h3>
                            <p className="text-white/80 text-[10px] md:text-[13px] lg:text-[15px]">Big styles for big kids (Up to 12 Years)</p>
                            <p className="text-[12px] md:text-[14px] inline-flex items-center gap-2 font-bold text-[#E96D92]">
                                View Details <ArrowRight />
                            </p>
                        </div>
                    </div>
            </CarouselItem>
            
        </CarouselContent>
        </Carousel >
    )
}