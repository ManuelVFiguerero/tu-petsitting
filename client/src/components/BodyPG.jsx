import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import natalia from '../assets/images/natalia.jpeg';
import daniela from '../assets/images/daniela.jpeg';
import pedro from '../assets/images/pedro.jpeg';
import veronica from '../assets/images/veronica.jpeg';

const BodyPG = () => {
  return (
    <div className="p-8 bg-white text-center">
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Koulen, sans-serif', color: '#8A9A5B' }}>TU CONFIANZA ES NUESTRA MAYOR PRIORIDAD</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <FontAwesomeIcon icon={faCheckCircle} size="3x" className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Cuidadores verificados</h2>
          <p>Verificamos el ID y la información de contacto de todos los cuidadores antes de que apliquen para cuidar, y muchos se ganan nuestra referencia gratis de chequeo</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUserCircle} size="3x" className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Referencias y reviews</h2>
          <p>¿Cómo elijo a qué cuidador aplicar? Comienza leyendo las referencias que le dejaron otros usuarios</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUserCircle} size="3x" className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Plan Hogar y Contenido</h2>
          <p>Su hogar está cubierto durante todas las estancias, sin coste adicional. Al fin y al cabo, es poco probable que lo necesites, pero lo tendrás por si acaso.</p>
        </div>
      </div>

      <p className="mb-4">Mirar todos los cuidadores de perro, gato y mascotas en Buenos Aires, Argentina</p>
      <p className="mb-12">¿Buscas un cuidador en Buenos Aires?</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="text-center">
          <img src={natalia} alt="Natalia" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-1">NATALIA</h4>
          <p>TIGRE</p>
        </div>
        <div className="text-center">
          <img src={daniela} alt="Daniela" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-1">DANIELA</h4>
          <p>PALERMO</p>
        </div>
        <div className="text-center">
          <img src={pedro} alt="Pedro" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-1">PEDRO</h4>
          <p>RECOLETA</p>
        </div>
        <div className="text-center">
          <img src={veronica} alt="Veronica" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-1">VERONICA</h4>
          <p>RECOLETA</p>
        </div>
      </div>

      <div className="bg-green-200 text-green-800 p-4 rounded-md mb-12">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
        Nosotros verificamos ID & datos de todos los cuidadores, para garantizar seguridad.
      </div>
    </div>
  );
};

export default BodyPG;
