import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AgregarClientes = () => {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState({
    nombres: "",
    apellidos: "",
    documento: "",
    correo: "",
    telefono: "",
    direccion: "",
  });

  const { nombres, apellidos, documento, correo, telefono, direccion } =
    clientes;

  useEffect(() => {
    document.getElementById("nombres").focus();
  }, []);

  const onChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  const CrearClientes = async () => {
    const data = {
      nombres: clientes.nombres,
      apellidos: clientes.apellidos,
      documento: clientes.documento,
      correo: clientes.correo,
      telefono: clientes.telefono,
      direccion: clientes.direccion,
    };
    const response = await APIInvoke.invokePOST("/api/clientes", data);
    const idClientes = response._id;

    if (idClientes === "") {
      const msg = " Hubo un error al agregar un cliente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      navigate("/clientes");
      const msg = " El cliente fue agregado con exito";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      setClientes({
        nombres: "",
        apellidos: "",
        documento: "",
        correo: "",
        telefono: "",
        direccion: "",
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    CrearClientes();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Clientes"}
          breadCrumb1={"Lista de clientes"}
          breadCrumb2={"agregar"}
          ruta1={"/clientes/agregar"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
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

            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="nombres">Nombres</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-teal">
                          <i className="fas fa-user fa-lg"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="nombres"
                        name="nombres"
                        placeholder="Nombres"
                        value={nombres}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="apellidos">Apellidos</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-teal">
                          <i className="fas fa-user-tag"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="apellidos"
                        name="apellidos"
                        placeholder="Apellidos"
                        value={apellidos}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="documento">Documento</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-teal">
                          <i className="fas fa-id-card"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control shadow-lg"
                        id="documento"
                        name="documento"
                        placeholder="Documento"
                        value={documento}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="email">Correo</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-teal">
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="correo"
                        name="correo"
                        placeholder="Correo"
                        value={correo}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="telefono">Telefono</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-teal">
                          <i className="fas fa-phone-alt"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control shadow-lg"
                        id="telefono"
                        name="telefono"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="direccion">Direccion</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-teal">
                          <i className="fas fa-map-marked"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="direccion"
                        name="direccion"
                        placeholder="Direccion"
                        value={direccion}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-footer text-center bg-white">
                  <button
                    type="submit"
                    className="btn btn-outline-info m-1 btn-sm"
                  >
                    Agregar <i class="fas fa-user-plus"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AgregarClientes;
