// src/pages/AboutUs.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <div className="py-16 px-4 bg-white text-center">
      <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Koulen, sans-serif', color: '#B2B8A3' }}>Quiénes Somos</h1>
      <p className="text-lg mb-8">
        Somos una empresa dedicada a proporcionar los mejores servicios de cuidado de mascotas. Nuestra misión es asegurar que cada mascota reciba el amor y la atención que merece, mientras sus dueños están fuera.
      </p>
      <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Koulen, sans-serif', color: '#B2B8A3' }}>Nuestra Historia</h2>
      <p className="text-lg mb-8">
        Fundada en 2024, TU PETSITTING comenzó con una simple idea: ofrecer un servicio confiable y cariñoso para las mascotas cuando sus dueños no pueden estar con ellas. Desde nuestros humildes comienzos, hemos crecido para servir a cientos de clientes satisfechos, siempre manteniendo nuestro compromiso con el bienestar animal.
      </p>
      <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Koulen, sans-serif', color: '#B2B8A3' }}>El Equipo</h2>
      <p className="text-lg mb-8">
        Conoce a las personas que hacen posible TU PETSITTING:
      </p>
      <div className="flex flex-col items-center">
        <ul className="list-none">
          <li className="text-lg mb-4">
            <FontAwesomeIcon icon={faPaw} className="text-gray-500 mr-2" />
            <span className="font-bold">Manuel Vicente Figuerero Mantilla:</span> Fundador y CEO
          </li>
          <li className="text-lg mb-4">
            <FontAwesomeIcon icon={faPaw} className="text-gray-500 mr-2" />
            <span className="font-bold">Cristobal Perez Companc:</span> Co-fundador 
          </li>
          <li className="text-lg mb-4">
            <FontAwesomeIcon icon={faPaw} className="text-gray-500 mr-2" />
            <span className="font-bold">Alex Munk:</span> Cadete
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
