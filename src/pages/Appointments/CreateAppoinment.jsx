import React, { useState, useEffect } from 'react';
import { createAppointment } from '../../api/api';
import { getPatients } from '../../api/api'; // Importa la función para obtener los pacientes
import { getDoctors } from '../../api/api'; // Importa la función para obtener los doctores

const CreateAppointment = () => {
  const [patients, setPatients] = useState([]); // Estado para los pacientes
  const [doctors, setDoctors] = useState([]); // Estado para los doctores
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date_time, setDateTime] = useState('');
  const [status, setStatus] = useState('PENDING');

  // Obtener pacientes y doctores cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      const patientsData = await getPatients(); // Obtener pacientes
      setPatients(patientsData);

      const doctorsData = await getDoctors(); // Obtener doctores
      setDoctors(doctorsData);
    };

    fetchData();
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = { patient, doctor, date_time, status };

    try {
      await createAppointment(appointmentData); // Llamamos a la función API para crear la cita
      alert('Cita creada exitosamente');
    } catch (error) {
      alert('Hubo un error al crear la cita');
    }

    // Limpiar los campos después de enviar el formulario
    setPatient('');
    setDoctor('');
    setDateTime('');
    setStatus('PENDING');
  };

  return (
    <div>
      <h2>Crear Cita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Paciente:</label>
          <select
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            required
          >
            <option value="">Seleccionar paciente</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Doctor:</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="">Seleccionar doctor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Fecha y Hora:</label>
          <input
            type="datetime-local"
            value={date_time}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Estado:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="PENDING">Pendiente</option>
            <option value="CONFIRMED">Confirmada</option>
            <option value="CANCELLED">Cancelada</option>
          </select>
        </div>
        <button type="submit">Crear Cita</button>
      </form>
    </div>
  );
};

export default CreateAppointment;
