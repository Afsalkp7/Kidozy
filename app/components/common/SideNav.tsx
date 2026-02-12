import { Moon } from "lucide-react";

export default function SideNav(){
    return (
        <div className="md:hidden block main-padding">
                <ul className="flex flex-col justify-between text-gray-700 gap-3">
                    <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Home</li>
                    <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Shop</li>
                    <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>About Us</li>
                    <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Collections</li>
                    <li className='hover:text-[#2AB7B1] cursor-pointer hover:underline transition-all duration-300'>Contact Us</li>
                    <li ><Moon/></li>
                    <li className='bg-[#E96D92] py-2 text-center text-white rounded-2xl'> Join Club </li>
                </ul>
            </div>
    )
}