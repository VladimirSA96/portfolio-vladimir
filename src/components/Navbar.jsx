import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/vs-white.png";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  // Funcion helper para generar clases dinamicas
  const getLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav id="nav-wrap">
        <div className="content-image">
          <img src={logo} alt="Logo del Portafolio" />
        </div>
        <div className="content-nav">
          <ul id="nav" className="nav">
            <li>
              <NavLink to="/" end className={getLinkClass}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getLinkClass}>
                Sobre Mi
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={getLinkClass}>
                Experiencia
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={getLinkClass}>
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getLinkClass}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* BOTTOM TABS MOBILE */}
      <div className="bottom-tabs">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          <FaHome className="tab-icon" />
          <span className="tab-text">Inicio</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          <FaUser className="tab-icon" />
          <span className="tab-text">Sobre Mi</span>
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          <FaBriefcase className="tab-icon" />
          <span className="tab-text">Experiencia</span>
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          <FaProjectDiagram className="tab-icon" />
          <span className="tab-text">Proyectos</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          <FaEnvelope className="tab-icon" />
          <span className="tab-text">Contacto</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
