import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();

  //definir el estado inicial de un componente
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const IniciarSesion = async () => {
    const emailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (password.length < 8) {
      const msg = "la contraseña debe contener minimo 8 caracteres";
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
    } else if (!emailvalid.test(usuario.email)) {
      const msg = "El email ingresado no es valido";
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
      const data = {
        email: usuario.email,
        password: usuario.password,
      };
      const response = await ApIInvoke.invokePOST("/api/auth", data);
      const mensaje = response.msg;

      if (
        mensaje === "El usuario no esta registrado" ||
        mensaje === "La contraseña es incorrecta"
      ) {
        const msg = "No fue posible iniciar sesion, revise sus datos ";
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
        //Obtenemos el token
        const jwt = response.token;
        //guardar el token
        localStorage.setItem("token", jwt);
        //despues de logueados entramos al home de la pagina
        navigate("/home");
      }
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    IniciarSesion();
  };

  return (
    <div className=' "hold-transition login-page'>
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Iniciar Sesion</b>
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Puede Ingresar</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="social-auth-links textcenter mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                <Link to={"/Registro"} className="btn btn-block btn-danger">
                  Registrarse
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
