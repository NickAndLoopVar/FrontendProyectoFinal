import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarClientes = () => {
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    const response = await APIInvoke.invokeGET("/api/clientes");
    setClientes(response.clientes);
  };

  useEffect(() => {
    getClientes();
  }, []);

  const eliminarClientes = async (e, idCliente) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);

    if (response.msg === "El cliente fue eliminado") {
      const msg = "El cliente fue eliminado correctamente";
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
      getClientes();
    } else {
      const msg = "El cliente no fue eliminado correctamente";
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
          titulo={"Lista de Clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Clientes"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to={"/clientes/agregar"}
                  className="btn btn-outline-info m-1 btn-sm"
                >
                  Agregar Clientes <i class="fas fa-user-plus"></i>
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
                    <th style={{ width: "12%" }}>Nombres</th>
                    <th style={{ width: "12%" }}>Apellidos</th>
                    <th style={{ width: "10%" }}>Documento</th>
                    <th style={{ width: "20%" }}>Correo</th>
                    <th style={{ width: "10%" }}>Teléfono</th>
                    <th style={{ width: "20%" }}>Dirección</th>
                    <th style={{ width: "16%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((cliente, index) => (
                    <tr key={index}>
                      <td className="align-middle"> {cliente.nombres}</td>
                      <td className="align-middle"> {cliente.apellidos}</td>
                      <td className="align-middle"> {cliente.documento}</td>
                      <td className="align-middle"> {cliente.correo}</td>
                      <td className="align-middle"> {cliente.telefono}</td>
                      <td className="align-middle"> {cliente.direccion}</td>
                      <td className="align-middle">
                        <Link
                          to={`/clientes/editar/${cliente._id}`}
                          className="btn btn-outline-success m-1 btn-sm"
                        >
                          {" "}
                          Editar <i class="fas fa-user-edit"></i>
                        </Link>
                        <button
                          onClick={(e) => eliminarClientes(e, cliente._id)}
                          className="btn btn-outline-danger m-1 btn-sm"
                        >
                          Borrar <i class="fas fa-user-times"></i>
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

export default MostrarClientes;
