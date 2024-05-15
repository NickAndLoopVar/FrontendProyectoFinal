import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  const getProyectos = async () => {
    const response = await APIInvoke.invokeGET("/api/proyectos");
    setProyectos(response.proyectos);
  };

  useEffect(() => {
    getProyectos();
  }, []);

  const eliminarProyectos = async (e, idProyecto) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(
      `/api/proyectos/${idProyecto}`
    );

    if (response.msg === "El proyecto fue eliminado") {
      const msg = "El proyecto fue eliminado correctamente";
      swal({
        title: "informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            valor: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      getProyectos();
    } else {
      const msg = "El proyecto no fue eliminado correctamente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            valor: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Lista de Proyectos"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Proyectos"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card ">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to={"/proyectos/agregar"}
                  className="btn btn-outline-info m-1 btn-sm"
                >
                  Agregar Proyectos <i class="fas fa-folder-plus fa-lg"></i>
                </Link>
              </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-expand-alt"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body table-responsive-sm">
              <table className="table table-bordered table-hover table-sm shadow-lg text-center">
                <thead className="bg-black">
                  <tr>
                    <th style={{ width: "20%" }}>Nombre</th>
                    <th style={{ width: "15%" }}>Framework</th>
                    <th style={{ width: "10%" }}>Lenguaje</th>
                    <th style={{ width: "20%" }}>Plataforma</th>
                    <th style={{ width: "10%" }}>Duración</th>
                    <th style={{ width: "10%" }}>Precio</th>
                    <th style={{ width: "15%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {proyectos.map((proyecto, index) => (
                    <tr key={index}>
                      <td className="align-middle"> {proyecto.nombre}</td>
                      <td className="align-middle"> {proyecto.framework}</td>
                      <td className="align-middle"> {proyecto.lenguaje}</td>
                      <td className="align-middle"> {proyecto.plataforma}</td>
                      <td className="align-middle"> {proyecto.duracion}</td>
                      <td className="align-middle"> {proyecto.precio}</td>
                      <td className="align-middle">
                        <Link
                          to={`/proyectos/editar/${proyecto._id}`}
                          className="btn btn-outline-success m-1 btn-sm"
                        >
                          {" "}
                          Editar <i className="fas fa-edit"></i>
                        </Link>
                        <button
                          onClick={(e) => eliminarProyectos(e, proyecto._id)}
                          className="btn btn-outline-danger m-1 btn-sm"
                        >
                          Borrar <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MostrarProyectos;
