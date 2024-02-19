'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from 'react';

// IMAGES
import nsfLogo from '../../public/lsamp-nsf-logos/NSF-clear.png';
import rutgersLogo from "../../public/rutgers-logos/RN_H_RED_BLACK_RGB.png"
import burger from "../../public/icons/beef-burger.png"
import rutgersMobile from "../../public/icons/rutgers-mobile-nav.png"

const NavBar: React.FC<{}> = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    
    const hideDiv = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>        
            <nav className='flex flex-col w-full bg-gray-300 sm:bg-white sticky z-30 top-0'>
                <div className='flex flex-wrap items-center justify-between h-[8vh] sm:h-auto' id='top-nav-container'>
                    <header className='flex items-center'>
                        <div className='flex my-1 p-2 gap-2' id='nav-logo-wrapper'>
                            <Image 
                                className='flex w-auto py-3 px-2 drop-shadow'
                                src={rutgersLogo}
                                alt="Rutgers Univesity–Newark Logo" 
                                width={160}
                                height={50}
                            />
                            <Image
                                className='flex w-auto py-3 px-2 drop-shadow'
                                src={nsfLogo}
                                alt="NSF Logo"
                                width={50}
                                height={50}
                            />
                        </div>
                        <hr className="text-gray-500 sm:text-gray-200 h-10 border-l-2 border-solid border-gray-500 sm:border-gray-200" />
                        <h1 className='flex ml-4 text-sm text-black sm:text-base md:text-lg font-normal'>
                            Louis Stokes Alliance for Minority Participation
                        </h1>  
                        <a onClick={hideDiv} className='flex mx-2 justify-center items-center w-10'>
                                <Image
                                    className='w-auto px-2 drop-shadow grayscale sm:invisible'
                                    src={burger}
                                    alt="hamburger menu"
                                    width={50}
                                    height={50}
                                />
                        </a>
                    </header>
                </div>
                <div id='navigation-pc'>
                    <div className='flex justify-center items-center text-center z-30 shadow-md bg-gradient-to-t from-red-900 to-red-700' id='bottom-nav-container '>
                        <ul className='flex text-base justify-center place-items-center flex-wrap text-white font-medium my-1 mx-5 list-none no-underline drop-shadow-md' id="bottom-nav-page-list">
                            {/* FIXME: GLOBAL CSS FOR HOVER EFFECT IS NOT WORKING */}
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/faculty">Faculty</Link>
                            </li>
                            <li>
                                <Link href="/membership">Membership</Link>
                            </li>
                            <li>
                                <Link href="/events">Events & Opportunities</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {isVisible && (
                <div id='mobile-nav' className='fixed left-0 top-0 w-full bg-[#EDEDED] z-50 mt-14 h-[92vh]'>
                    <div className='grid grid-col-6 h-full text-base justify-center place-items-center flex-wrap text-black font-bold my-1 mx-5 list-none no-underline drop-shadow-md' id="bottom-nav-page-list">
                        {/* FIXME: GLOBAL CSS FOR HOVER EFFECT IS NOT WORKING */}
                        <div className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} href="/">Home</Link>
                        </div>
                        <div className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} href="/about">About Us</Link>
                        </div>
                        <div className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} href="/faculty">Faculty</Link>
                        </div>
                        <div className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} href="/membership">Membership</Link>
                        </div>
                        <div className='w-full h-full flex justify-center items-center border-b border-[#D4D4D4]'>
                            <Link onClick={hideDiv} href="/events">Events & Opportunities</Link>
                        </div>
                        <div className='w-full h-full flex justify-center items-center'>
                            <Link onClick={hideDiv} href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;