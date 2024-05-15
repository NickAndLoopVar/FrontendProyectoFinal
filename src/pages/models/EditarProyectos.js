import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

const EditarProyectos = () => {
  const [nombre, setNombre] = useState("");
  const [framework, setFramework] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [duracion, setDuracion] = useState("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //Funcion actualizar

  const editarProyectos = async (e) => {
    e.preventDefault();
    let response = await APIInvoke.invokePUT(`/api/proyectos/${id}`, {
      nombre: nombre,
      framework: framework,
      lenguaje: lenguaje,
      plataforma: plataforma,
      duracion: duracion,
      precio: precio,
    });
    if (response.msg === "Hubo un error al actualizar un proyecto") {
      const msg = "El proyecto no fue editado";
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
      const msg = "El proyecto fue editado correctamente";
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

    navigate("/proyectos");
  };
  useEffect(() => {
    getproyectosID();
    // eslint-disable-next-line
  }, []);

  const getproyectosID = async () => {
    const resul = await APIInvoke.invokeGET(`/api/proyectos/${id}`);
    setNombre(resul.nombre);
    setFramework(resul.framework);
    setLenguaje(resul.lenguaje);
    setPlataforma(resul.plataforma);
    setDuracion(resul.duracion);
    setPrecio(resul.precio);
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Proyectos"}
          breadCrumb1={"Lista de clientes"}
          breadCrumb2={"editar"}
          ruta1={"/proyectos/editar"}
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
              <form onSubmit={editarProyectos}>
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
                        onChange={(e) => setNombre(e.target.value)}
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
                        onChange={(e) => setFramework(e.target.value)}
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
                        onChange={(e) => setLenguaje(e.target.value)}
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
                        onChange={(e) => setPlataforma(e.target.value)}
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
                        onChange={(e) => setDuracion(e.target.value)}
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
                        onChange={(e) => setPrecio(e.target.value)}
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
                    Editar <i className="fas fa-edit"></i>
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

export default EditarProyectos;
