import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Taller El Chuy. Todos los derechos reservados.</p>
                <p>Hecho por <a href="https://cortes-dev.vercel.app/" target="_blank" className="text-blue-400 hover:underline font-bold">Diego Cortes</a></p>
            </div>
        </footer>
    );
}

export default Footer;