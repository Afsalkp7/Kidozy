import { Moon } from "lucide-react";
import Link from "next/link";

export default function SideNav({ pathname }: { pathname: string }) {
  const navItems = [
    { name: "Home", href: "/" },
    // { name: 'Shop', href: '/shop' },
    { name: "About Us", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="md:hidden block main-padding">
      <ul className="flex flex-col justify-between text-gray-700 gap-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-lg transition-all duration-300 hover:text-[#2AB7B1] 
                                    ${isActive ? "text-[#2AB7B1] font-bold border-l-4 border-[#2AB7B1] pl-3" : "text-gray-700"}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}

        <hr className="border-gray-100 my-2" />

        {/* <li className="flex items-center gap-2 cursor-pointer text-gray-700">
                    <Moon size={20} /> Dark Mode
                </li> */}

        <li className="bg-[#E96D92] py-3 text-center text-white rounded-2xl font-medium cursor-pointer active:scale-95 transition-transform">
          Join Club
        </li>
      </ul>
    </div>
  );
}
