import React from 'react';
import charger from '../assets/carro.png';
import shelby from '../assets/shelby.png';
import corvette from '../assets/corvette c8.png';
import CartInfoImg from '../components/CartInfoImg';
import InfoCart from '../components/InfoCart';

const CartInfo = () => {
    return (
        <div className='w-full flex flex-col justify-center'>
            <div className="my-10 px-4 grid grid-cols-1">
                {/* Primera Sección: Texto a la Izquierda, Imagen a la Derecha */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
                    <div className="flex justify-center items-center">
                        <InfoCart
                            title="Dodge Charger SRT Hellcat"
                            desc="El Dodge Charger SRT Hellcat es un destacado muscle car que combina potencia extrema con un diseño agresivo y tecnología avanzada." />
                    </div>
                    <div className="flex justify-center items-center">
                        <CartInfoImg imagen={charger} alt="Cabina" />
                    </div>
                </div>

                {/* Segunda Sección: Imagen a la Izquierda, Texto a la Derecha */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
                    <div className="flex justify-center items-center">
                        <CartInfoImg imagen={shelby} alt="Cabina" />
                    </div>
                    <div className="flex justify-center items-center">
                        <InfoCart
                            title="Ford Mustang Shelby GT500"
                            desc="El Ford Mustang Shelby GT500 es un ícono entre los muscle cars americanos, reconocido por su potencia y rendimiento excepcionales. La versión más reciente, lanzada en 2020, se destaca como el modelo más potente de la historia de Ford, combinando tecnología avanzada con un diseño aerodinámico." />
                    </div>
                </div>


                {/* Tercera Sección: Imagen a la Derecha, Texto a la Izquierda */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
                    <div className="flex justify-center items-center">
                        <InfoCart
                            title="Chevrolet Corvette C8"
                            desc="El Chevrolet Corvette C8, lanzado en 2020, marca un cambio significativo en la historia del Corvette al adoptar un diseño de motor central, lo que mejora su rendimiento y manejo. Este modelo ha sido bien recibido tanto por críticos como por entusiastas del automovilismo." />
                    </div>
                    <div className="flex justify-center items-center">
                        <CartInfoImg imagen={corvette} alt="Cabina" />
                    </div>
                </div>




            </div>
        </div>
    );
}

export default CartInfo;