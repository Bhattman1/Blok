'use client'
import Link from 'next/link';
import Image from 'next/image'; 
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <nav className={`flex items-center justify-between w-full p-6 bg-custom-gray text-lg sm:text-base xs:text-sm z-5000 ${isMounted ? 'animate-fadeIn' : ''}`}>
            <Link href="/">
                <Image 
                    src="/Blok-logo2.png" 
                    alt="LOGO" 
                    width={300} 
                    height={100} 
                    className="cursor-pointer hover:opacity-50"
                />
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

export default Navbar;
