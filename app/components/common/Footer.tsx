import { Instagram, MapPinCheck, Phone } from "lucide-react";
import LogoComponent from "./Logo";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col lg:flex-row main-padding justify-between items-center gap-5 text-slate-600 mt-20">
                <div className="w-full">
                    <LogoComponent />
                    <p className="text-[12px]  md:text-[16px]">Kidozy is more than a brand; it's a celebration of childhood. We bring joy to your children's wardrobe with high-quality, ethically sourced fashion.</p>
                </div>
                <div className="w-full items-center text-[12px]  md:text-[16px]">
                    <h4 className="text-zinc-950 font-bold mb-3">Explore</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Shop</li>
                        <li>Collections</li>
                    </ul>
                </div>
                <div className="w-full text-[12px] md:text-[16px]">
                    <h4 className="text-zinc-950 font-bold mb-3">Contact Us</h4>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <div className="flex gap-2">
                                <span><MapPinCheck /></span>
                                <span>Kidozy, Perinthalmanna road uphill malappuram</span>
                            </div>
                        </li>
                        <li><div className="flex gap-2">
                            <span><Phone /></span>
                            <span>+91 9876543210</span>
                        </div></li>
                        <li><div className="flex gap-2">
                            <span><Instagram /></span>
                            <span>kidozy.mpm</span>
                        </div></li>

                    </ul>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row main-padding justify-between items-start sm:items-center text-sm gap-5 text-slate-400 text-[12px] md:text-[16px]">
                <div>
                    <p>© 2024 Kidozy Official. All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

            </div>
        </>

    )
}