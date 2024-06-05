import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#DEEDF0] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-3">PREGUNTAS FRECUENTES</h5>
            <ul>
              <li className="mb-2"><a href="#">¿Cómo me comunico con el cuidador de mascotas?</a></li>
              <li className="mb-2"><a href="#">¿Puedo conocer a quién elijo como cuidador de mi mascota?</a></li>
              <li className="mb-2"><a href="#">¿Cómo funciona la aplicación?</a></li>
              <li className="mb-2"><a href="#">¿Cuándo y cómo se paga?</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-3">INFORMACION</h5>
            <ul>
              <li className="mb-2"><a href="#">Términos y Condiciones</a></li>
              <li className="mb-2"><a href="#">Políticas de Privacidad</a></li>
              <li className="mb-2"><a href="#">FAQ</a></li>
              <li className="mb-2"><a href="#">Información de Pago</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-3">REDES SOCIALES</h5>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-gray-700 hover:text-gray-900 transition" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="text-gray-700 hover:text-gray-900 transition" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.twitter.com" className="text-gray-700 hover:text-gray-900 transition" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
