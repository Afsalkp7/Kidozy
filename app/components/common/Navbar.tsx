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
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const navToggle = () => {
        setShowNav(!showNav)
    }

    const pathname : string = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        // { name: 'Shop', href: '/shop' },
        { name: 'About Us', href: '/about' },
        { name: 'Collections', href: '/collections' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
            <div className="flex justify-between text-center items-center main-padding">
                <div className="">
                    <LogoComponent />
                </div>
                <div className="md:block hidden">
                    <ul className="flex justify-between text-gray-700 gap-5">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link 
                                        href={item.href}
                                        className={`cursor-pointer transition-all duration-300 hover:text-[#2AB7B1] hover:underline
                                            ${isActive ? 'text-[#2AB7B1] font-semibold underline' : 'text-gray-700'}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
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
                    <SideNav pathname={pathname} />
                </SheetContent>
            </Sheet>

        </>
    )
}
