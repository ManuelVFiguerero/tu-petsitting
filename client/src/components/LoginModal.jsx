import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import IconInput from './IconInput';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí
    console.log('Login:', { email, password });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Iniciar Sesión"
      className="fixed inset-0 flex items-center justify-center z-50 outline-none focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
    >
      <div className="relative flex items-center justify-center min-h-screen">
        <form
          className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg relative"
          onSubmit={handleLogin}
        >
          <button
            type="button"
            onClick={onRequestClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Iniciar Sesión</h1>
          <p className="mb-6 text-xl text-gray-600">
            Bienvenido, ingrese sus datos:
          </p>

          <IconInput onChange={setEmail} icon={faEnvelope} placeholder="Email" />
          <IconInput onChange={setPassword} icon={faLock} placeholder="Contraseña" />

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-blue-500 px-4 py-3 text-xl font-semibold text-white transition hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>

          <div className="mt-4 flex w-full flex-row justify-center gap-1 text-center">
            <p>¿No tenés cuenta?</p>
            <button
              type="button"
              onClick={onRequestClose}
              className="text-blue-500 transition hover:underline"
            >
              Registrate
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
