import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0
      </div>
      <strong>
        Copyright &copy; 2024{" "}
        <Link to={"https://adminlte.io"}>AdminLTE.io </Link>
      </strong>
      All right reserved
    </footer>
  );
};

export default Footer;
