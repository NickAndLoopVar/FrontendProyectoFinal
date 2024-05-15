import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <i className="nav-icon fa fa-home"></i>
            <p>Inicio</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/clientes"} className="nav-link">
            <i className="nav-icon fa fa-user"></i>
            <p>Clientes</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/proyectos"} className="nav-link">
            <i className="nav-icon fa fa-code"></i>
            <p>Proyectos</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
