import { useState, useEffect } from 'react';
import ThemeDark from '../assets/themeDark.svg';

function ThemeButton() {
    // Establecer el estado inicial basado en localStorage
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Efecto para cambiar el tema del documento
    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
        // Guardar el modo en localStorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    // Función para alternar el modo
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
            className="p-2 bg-transparent border-none cursor-pointer"
        >
            <img src={ThemeDark} alt="Icono de tema oscuro" />
        </button>
    );
}

export default ThemeButton;