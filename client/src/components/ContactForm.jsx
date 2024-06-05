import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';
import IconInput from './IconInput';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log({ name, email, phone, country, message });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Koulen, sans-serif' }}>CONTACTANOS!</h2>
      <form className="bg-black bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-2xl" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <IconInput
            icon={faUser}
            placeholder="Nombre"
            onChange={setName}
            value={name}
          />
          <IconInput
            icon={faEnvelope}
            placeholder="Email"
            onChange={setEmail}
            value={email}
          />
          <IconInput
            icon={faPhone}
            placeholder="Telefono"
            onChange={setPhone}
            value={phone}
          />
          <IconInput
            icon={faGlobe}
            placeholder="Pais"
            onChange={setCountry}
            value={country}
          />
        </div>
        <div className="flex items-start bg-white p-2 rounded-md mb-4">
          <FontAwesomeIcon icon={faMessage} className="text-gray-400 mr-2 mt-3" />
          <textarea
            className="p-3 rounded-md border-none w-full text-black bg-white placeholder-gray-500 focus:outline-none"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ fontFamily: 'Koulen, sans-serif' }}
          />
        </div>
        <button
          className="w-full py-3 rounded-[20px] border-2 border-white bg-[#232626] text-white font-semibold hover:bg-gray-700 transition"
          type="submit"
          style={{ fontFamily: 'Koulen, sans-serif' }}
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
