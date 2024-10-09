import React from 'react';
import charger from '../assets/carro.png';
import shelby from '../assets/shelby.png';
import corvette from '../assets/corvette c8.png';
import CartInfoImg from '../components/CartInfoImg';
import InfoCart from '../components/InfoCart';

const CartInfo = () => {
    return (
        <div className='w-full flex flex-col justify-center'>
            <div className="my-10 px-4 grid grid-cols-1 text-center md:text-start">
                {/* First Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 h-screen slide-down">
                    <div className="flex justify-center md:items-center order-2 md:order-1">
                        <InfoCart
                            title="Dodge Charger SRT Hellcat"
                            desc="El Dodge Charger SRT Hellcat es un destacado muscle car que combina potencia extrema con un diseño agresivo y tecnología avanzada." />
                    </div>
                    <div className="flex justify-center items-center order-1 md:order-2">
                        <CartInfoImg imagen={charger} alt="Cabina" />
                    </div>
                </div>

                {/* Second Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 h-screen slide-down">
                    <div className="flex justify-center items-center order-1 md:order-1">
                        <CartInfoImg imagen={shelby} alt="Cabina" />
                    </div>
                    <div className="flex justify-center md:items-center order-2 md:order-2">
                        <InfoCart
                            title="Ford Mustang Shelby GT500"
                            desc="El Ford Mustang Shelby GT500 es un ícono entre los muscle cars americanos, reconocido por su potencia y rendimiento excepcionales." />
                    </div>
                </div>

                {/* Third Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 h-screen slide-down">
                    <div className="flex justify-center md:items-center order-2 md:order-1">
                        <InfoCart
                            title="Chevrolet Corvette C8"
                            desc="El Chevrolet Corvette C8, lanzado en 2020, marca un cambio significativo en la historia del Corvette al adoptar un diseño de motor central." />
                    </div>
                    <div className="flex justify-center items-center order-1 md:order-2">
                        <CartInfoImg imagen={corvette} alt="Cabina" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartInfo;