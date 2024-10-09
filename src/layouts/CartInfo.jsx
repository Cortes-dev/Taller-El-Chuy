import React from 'react';
import carro from '../assets/carro.png';
import CartInfoImg from '../components/CartInfoImg';

const CartInfo = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center'>
            <div className="my-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-md">
                            <h1 className='text-4xl md:text-5xl font-bold'>Dodge Charger SRT Hellcat</h1>
                            <p className='text-lg mt-4'>
                                El Dodge Charger SRT Hellcat es un destacado muscle car que combina potencia extrema con un diseño agresivo y tecnología avanzada.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-md">
                            <CartInfoImg imagen={carro} alt="Cabina" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartInfo;