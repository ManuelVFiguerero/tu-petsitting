import React from 'react';
import BarPG from '../components/BarPG';
import BodyPG from '../components/BodyPG';
import ContactForm from '../components/ContactForm'; // Asegúrate de importar el formulario de contacto si es necesario

function Home() {
  return (
    <div>
      <BarPG />
      <BodyPG />
      <ContactForm />
    </div>
  );
}

export default Home;
