import { useState } from 'react';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import IconInput from './IconInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form
      className="m-5 w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg"
      onSubmit={handleLogin}
    >
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
        <p> No tenés cuenta? </p>
        <Link
          to="/register"
          className="text-blue-500 transition hover:underline"
        >
          Registrate
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

