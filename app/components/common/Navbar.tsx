"use client"
import { ListCollapse, Moon } from 'lucide-react';
import { useState } from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideNav from './SideNav';
import LogoComponent from './Logo';

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const navToggle = () => {
        setShowNav(!showNav)
    }

    return (
        <>
            <div className="flex justify-between text-center items-center main-padding">
                <div className="">
                    <LogoComponent />
                </div>
                <div className="md:block hidden">
                    <ul className="flex justify-between text-gray-700 gap-5">
                        <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Home</li>
                        <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Shop</li>
                        <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>About Us</li>
                        <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Collections</li>
                        <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Contact Us</li>
                    </ul>
                </div>
                <div className="md:block hidden">
                    <ul className='flex justify-end gap-5 text-gray-700 text-center items-center'>
                        <li ><Moon /></li>
                        <li className='bg-[#E96D92] p-2 text-white rounded-2xl'> Join Club </li>
                    </ul>
                </div>
                <div onClick={navToggle} className="md:hidden block text-gray-700"><ListCollapse /></div>


            </div>

            <Sheet open={showNav} onOpenChange={setShowNav}>
                <SheetContent side={"left"} className='w-[85%]'>
                    <SheetTitle>
                        <div className="main-padding">
                            <LogoComponent />
                        </div>
                    </SheetTitle>
                    <SideNav />
                </SheetContent>
            </Sheet>

        </>
    )
}
