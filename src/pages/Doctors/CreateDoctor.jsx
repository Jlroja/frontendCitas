// src/pages/Doctors/CreateDoctor.jsx
import React, { useState } from 'react';
import { createDoctor } from '../../api/api';

const CreateDoctor = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doctorData = { name, specialty, email, phone };

    try {
      await createDoctor(doctorData);
      alert('Doctor creado exitosamente');
    } catch (error) {
      alert('Hubo un error al crear el doctor');
    }

    // Limpiar los campos después de enviar el formulario
    setName('');
    setSpecialty('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2>Crear Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Especialidad:</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Crear Doctor</button>
      </form>
    </div>
  );
};

export default CreateDoctor;
