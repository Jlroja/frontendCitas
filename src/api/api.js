// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Asegúrate de que esta URL es correcta

// Crear un paciente
export const createPatient = async (patientData) => {
  try {
    const response = await axios.post(`${API_URL}/patients/`, patientData);
    return response.data;
  } catch (error) {
    console.error("Error al crear paciente:", error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Crear un doctor
export const createDoctor = async (doctorData) => {
  try {
    const response = await axios.post(`${API_URL}/doctors/`, doctorData);
    return response.data;
  } catch (error) {
    console.error("Error al crear doctor:", error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Crear una cita
export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_URL}/appointments/`, appointmentData);
    return response.data;
  } catch (error) {
    console.error("Error al crear cita:", error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data : error.message);

  }
};

export const getPatients = async () => {
    try {
      const response = await axios.get(`${API_URL}/patients/`);
      return response.data; // Asumiendo que la respuesta tiene la lista de pacientes
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
      return [];
    }
  };

  
  export const getDoctors = async () => {
    try {
      const response = await axios.get(`${API_URL}/doctors/`);
      return response.data; // Asumiendo que la respuesta tiene la lista de doctores
    } catch (error) {
      console.error("Error al obtener doctores:", error);
      return [];
    }
  };
