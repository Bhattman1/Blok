import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full p-6 bg-custom-gray text-lg sm:text-base xs:text-sm z-5000">
            <Link href="/">
                <div className="text-4xl md:text-2xl sm:text-xl font-bold text-black cursor-pointer hover:opacity-50">
                    LOGO
                </div>
            </Link>
            <div className="flex space-x-4">
                <div className="text-black cursor-pointer hover:opacity-50">
                    Portfolio
                </div>
                <Link href="/Team">
                    <div className="text-black cursor-pointer hover:opacity-50">
                        Team
                    </div>
                </Link>
                <Link href="/ContactUs">
                    <div className="text-black cursor-pointer hover:opacity-50">
                        Contact Us
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
