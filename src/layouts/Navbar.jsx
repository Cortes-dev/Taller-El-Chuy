import React, { useState } from 'react'
import LinkUrl from '../components/LinkUrl'

import logo from '../assets/logoChuy.webp'

const Navbar = () => {

    const [scroll, setScroll] = useState(false);


    window.addEventListener('scroll', () => {
        setScroll(window.scrollY > 1);
    });

    return (
        <nav className='fixed z-50 flex justify-between md:px-20 px-6 text-white items-center w-full h-14 bg-gray-800'>
            <div className="">
                <div className="w-16 bg-white rounded-sm">
                    <img className='w-full h-full object-contain' src={logo} alt="Logo" />
                </div>
            </div>
            <ul className="flex justify-center items-center space-x-5">
                <LinkUrl url="/" text="Home" />
                <LinkUrl url="/Carros" text="Carros" />
                <LinkUrl url="/Trocas" text="Trocas" />
            </ul>
        </nav>
    )
}

export default Navbar