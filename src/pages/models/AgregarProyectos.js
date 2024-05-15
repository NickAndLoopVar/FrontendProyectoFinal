import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AgregarProyectos = () => {
  const navigate = useNavigate();
  const [proyectos, setProyectos] = useState({
    nombre: "",
    framework: "",
    lenguaje: "",
    plataforma: "",
    duracion: "",
    precio: "",
  });

  const { nombre, framework, lenguaje, plataforma, duracion, precio } =
    proyectos;

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setProyectos({
      ...proyectos,
      [e.target.name]: e.target.value,
    });
  };

  const CrearProyectos = async () => {
    const data = {
      nombre: proyectos.nombre,
      framework: proyectos.framework,
      lenguaje: proyectos.lenguaje,
      plataforma: proyectos.plataforma,
      duracion: proyectos.duracion,
      precio: proyectos.precio,
    };
    const response = await APIInvoke.invokePOST("/api/proyectos", data);
    const idProyectos = response._id;

    if (idProyectos === "") {
      const msg = " Hubo un error al agregar un proyecto";
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
      navigate("/proyectos");
      const msg = " El proyecto fue agregado con exito";
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
      setProyectos({
        nombre: "",
        framework: "",
        lenguaje: "",
        plataforma: "",
        duracion: "",
        precio: "",
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    CrearProyectos();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Proyectos"}
          breadCrumb1={"Lista de Proyectos"}
          breadCrumb2={"agregar"}
          ruta1={"/proyectos/agregar"}
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
                    <label htmlFor="nombre">Nombre</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-indigo">
                          <i className="fas fa-folder fa-lg"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="framework">Framework</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-indigo">
                          <i className="fas fa-sitemap"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="framework"
                        name="framework"
                        placeholder="Framework"
                        value={framework}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="lenguaje">Lenguaje</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-indigo">
                          <i className="fas fa-terminal"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="lenguaje"
                        name="lenguaje"
                        placeholder="Lenguaje"
                        value={lenguaje}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="plataforma">Plataforma</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-indigo">
                          <i className="fas fa-laptop-code"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="plataforma"
                        name="plataforma"
                        placeholder="Plataforma"
                        value={plataforma}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="duracion">Duracion</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-indigo">
                          <i className="fas fa-stopwatch fa-lg"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control shadow-lg"
                        id="duracion"
                        name="duracion"
                        placeholder="Duracion"
                        value={duracion}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-floating w-50 mx-auto">
                    <label htmlFor="precio">Precio</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-indigo">
                          <i className="fas fa-money-bill-wave"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control shadow-lg"
                        id="precio"
                        name="precio"
                        placeholder="Precio"
                        value={precio}
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
                    Agregar <i class="fas fa-folder-plus fa-lg"></i>
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

export default AgregarProyectos;
