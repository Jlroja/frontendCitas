// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Clínica</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Aquí centramos los elementos del navbar */}
            <li className="nav-item">
              <Link className="nav-link active" to="/patients/create">Crear Paciente</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors/create">Crear Doctor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appointments/create">Crear Cita</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto"> {/* Alineamos el formulario de búsqueda a la derecha */}
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar" 
              aria-label="Search" 
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
