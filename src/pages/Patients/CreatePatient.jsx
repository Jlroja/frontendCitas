// src/pages/Patients/CreatePatient.jsx
import React, { useState } from 'react';
import { createPatient } from '../../api/api'; // Llama a la función para enviar la solicitud POST

const CreatePatient = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const patientData = { name, email, phone };

    try {
      await createPatient(patientData); // Llamamos a la función API para crear el paciente
      alert('Paciente creado exitosamente');
    } catch (error) {
      alert('Hubo un error al crear el paciente');
    }

    // Limpiar los campos después de enviar el formulario
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2>Crear Paciente</h2>
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
        <button type="submit">Crear Paciente</button>
      </form>
    </div>
  );
};

export default CreatePatient;
