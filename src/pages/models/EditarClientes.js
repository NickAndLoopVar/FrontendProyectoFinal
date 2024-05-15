import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

const EditarClientes = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //Funcion actualizar

  const editarClientes = async (e) => {
    e.preventDefault();
    let response = await APIInvoke.invokePUT(`/api/clientes/${id}`, {
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });
    if (response.msg === "Hubo un error al actualizar un cliente") {
      const msg = "El cliente no fue editado";
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
      const msg = "El cliente fue editado correctamente";
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
    }

    navigate("/clientes");
  };
  useEffect(() => {
    getclientesID();
    // eslint-disable-next-line
  }, []);

  const getclientesID = async () => {
    const resul = await APIInvoke.invokeGET(`/api/clientes/${id}`);
    setNombres(resul.nombres);
    setApellidos(resul.apellidos);
    setDocumento(resul.documento);
    setCorreo(resul.correo);
    setTelefono(resul.telefono);
    setDireccion(resul.direccion);
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Clientes"}
          breadCrumb1={"Lista de clientes"}
          breadCrumb2={"editar"}
          ruta1={"/clientes/editar"}
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
                  <i className="fas fa-times"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-items"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={editarClientes}>
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
                        onChange={(e) => setNombres(e.target.value)}
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
                        onChange={(e) => setApellidos(e.target.value)}
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
                        onChange={(e) => setDocumento(e.target.value)}
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
                        onChange={(e) => setCorreo(e.target.value)}
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
                        onChange={(e) => setTelefono(e.target.value)}
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
                        placeholder="Dirección"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
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
                    Editar <i class="fas fa-user-edit"></i>
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

export default EditarClientes;
