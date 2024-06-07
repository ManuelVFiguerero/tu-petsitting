import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

function Navbar() {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <div className="h-12 w-12 mr-2">
                <svg width="64" height="49" viewBox="0 0 64 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="32.9637" cy="32.6667" rx="17.1788" ry="16.3333" fill="#F4C7AB"/>
                  <ellipse cx="57.0141" cy="20.7308" rx="6.8715" ry="8.16667" fill="#F4C7AB"/>
                  <path d="M48.773 9.73389C48.3841 14.2223 44.8797 17.5012 40.9457 17.0575C37.0117 16.6138 34.1379 12.6155 34.5268 8.12705C34.9157 3.63861 38.4201 0.359703 42.3541 0.80342C46.288 1.24714 49.1619 5.24544 48.773 9.73389Z" fill="#F4C7AB"/>
                  <ellipse cx="8.34086" cy="20.7308" rx="7.44413" ry="8.16667" fill="#F4C7AB"/>
                  <path d="M29.5279 8.16667C29.5279 12.677 26.4514 16.3333 22.6564 16.3333C18.8614 16.3333 15.7849 12.677 15.7849 8.16667C15.7849 3.65634 18.8614 0 22.6564 0C26.4514 0 29.5279 3.65634 29.5279 8.16667Z" fill="#F4C7AB"/>
                  <ellipse cx="32.3909" cy="32.6667" rx="8.58938" ry="6.28205" fill="#FFF5EB"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-700 ml-4 text-[#B2B8A3] transition duration-300 hover:text-gray-600">TUPETSITTING</span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/faq" className="text-xl text-gray-800 hover:text-[#B2B8A3] transition duration-300">FAQ</Link>
            <Link to="/about" className="text-xl text-gray-800 hover:text-[#B2B8A3] transition duration-300">NOSOTROS</Link>
            <button
              onClick={() => setLoginModalIsOpen(true)}
              className="text-xl text-gray-800 hover:text-[#B2B8A3] transition duration-300"
            >
              INICIAR SESIÓN
            </button>
            <button
              onClick={() => setRegisterModalIsOpen(true)}
              className="text-xl text-gray-800 hover:text-[#B2B8A3] transition duration-300"
            >
              REGISTRARSE
            </button>
          </div>
        </div>
      </nav>
      <RegisterModal isOpen={registerModalIsOpen} onRequestClose={() => setRegisterModalIsOpen(false)} />
      <LoginModal isOpen={loginModalIsOpen} onRequestClose={() => setLoginModalIsOpen(false)} />
    </>
  );
}

export default Navbar;


