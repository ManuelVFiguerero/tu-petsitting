// RegisterModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faMapMarkerAlt, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import IconInput from './IconInput';

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
    console.log('Register:', { name, lastName, email, password, confirmPassword, phone, address });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Registrar Usuario"
      className="fixed inset-0 flex items-center justify-center z-50 outline-none focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
    >
      <div className="relative flex items-center justify-center min-h-screen">
        <form
          className="w-full max-w-3xl rounded-lg bg-white p-8 text-center shadow-lg relative"
          onSubmit={handleRegister}
        >
          <button
            type="button"
            onClick={onRequestClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Crear Cuenta</h1>
          <p className="mb-6 text-xl text-gray-600">
            Complete los datos para registrarse:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <IconInput onChange={setName} icon={faUser} placeholder="Nombre" />
            <IconInput onChange={setLastName} icon={faUser} placeholder="Apellido" />
          </div>
          <IconInput onChange={setEmail} icon={faEnvelope} placeholder="Email" />
          <IconInput onChange={setPassword} icon={faLock} placeholder="Contraseña" />
          <IconInput onChange={setConfirmPassword} icon={faLock} placeholder="Reescribir Contraseña" />
          <IconInput onChange={setPhone} icon={faPhone} placeholder="Teléfono" />
          <IconInput onChange={setAddress} icon={faMapMarkerAlt} placeholder="Dirección" />

          <div className="mt-6 text-left">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Acepto unirme a la lista de correo de Petsitting</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Al hacer clic en "Crear cuenta", usted acepta la Política de Privacidad y PETSITTING R.</span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-blue-500 px-4 py-3 text-xl font-semibold text-white transition hover:bg-blue-600"
          >
            Crear Cuenta
          </button>

          <div className="mt-4 flex w-full flex-row justify-center gap-1 text-center">
            <p>¿Ya tienes una cuenta?</p>
            <button
              type="button"
              onClick={onRequestClose}
              className="text-blue-500 transition hover:underline"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;


