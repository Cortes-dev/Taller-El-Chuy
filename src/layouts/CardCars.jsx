import React, { useEffect, useState } from 'react';

const CardCars = () => {
  const [carros, setCarros] = useState([]); // Estado para almacenar los datos de los coches
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    fetch('/json/Cars.json') // Ruta al archivo JSON
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCarros(data.carros)) // Almacena los datos en el estado
      .catch(error => setError(error)); // Maneja cualquier error
  }, []);

  const getImagePath = (imageName) => {
    return `/src/assets/${imageName}`; // Cambiado para apuntar correctamente a la carpeta img
  };

  if (error) {
    return <div>Error: {error.message}</div>; // Muestra el error si ocurre
  }

  if (carros.length === 0) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="flex flex-wrap justify-center p-4">
      {carros.map((car, index) => (
        <div key={index} className="max-w-sm w-full lg:max-w-xs m-4 bg-white dark:bg-black/40 shadow-md rounded-lg group overflow-hidden hover:scale-[1.01] transition-all hover:shadow-gray-400 dark:hover:shadow-none">
          <img src={getImagePath(car.imagen)} alt={car.nombre} className="w-full h-48 object-contain group-hover:scale-125 transition-all duration-500" />
          <div className="p-6">
            <h2 className="text-xl font-bold dark:text-white mb-2">{car.nombre}</h2>
            <p className="text-gray-700">{car.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCars;