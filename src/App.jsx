// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePatient from './pages/Patients/CreatePatient';
import CreateDoctor from './pages/Doctors/CreateDoctor';
import CreateAppointment from './pages/Appointments/CreateAppoinment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar en la parte superior */}
      <div className="main-content">
        <Routes>
          <Route path="/patients/create" element={<CreatePatient />} />
          <Route path="/doctors/create" element={<CreateDoctor />} />
          <Route path="/appointments/create" element={<CreateAppointment />} />
        </Routes>
      </div>
      <Footer /> {/* Footer en la parte inferior */}
    </Router>
  );
}

export default App;
