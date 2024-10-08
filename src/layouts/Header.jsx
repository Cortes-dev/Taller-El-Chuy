import React from 'react';
import srt from '../assets/Challenger SRT.mp4';

const Header = () => {
    return (
        <div className="relative w-full h-screen">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={srt}
            ></video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
                <h1 className='md:text-9xl text-7xl font-extrabold tracking-widest font-header text-'>Taller <br /> El <br /> Chuy</h1>
            </div>
        </div>
    );
}

export default Header;