import React from "react";
import Menu from "./Menu";
import Logo from "../img/AdminLTELogo.png";
import { Link } from "react-router-dom";

const SidebarContainer = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 bg-black">
      <Link to={"/home"} className="brand-link">
        <img
          src={Logo}
          alt="AdminLTE logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "8" }}
        ></img>
        <span className="brand-text font-weight-dark">Proyecto Final</span>
      </Link>
      <div className="sidebar">
        <Menu></Menu>
      </div>
    </aside>
  );
};

export default SidebarContainer;
