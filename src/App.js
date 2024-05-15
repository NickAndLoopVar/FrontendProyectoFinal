import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./pages/models/MostrarClientes";
import AgregarClientes from "./pages/models/AgregarClientes";
import EditarClientes from "./pages/models/EditarClientes";
//Segundo modulo
import MostrarProyectos from "./pages/models/MostrarProyectos";
import AgregarProyectos from "./pages/models/AgregarProyectos";
import EditarProyectos from "./pages/models/EditarProyectos";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login></Login>}></Route>
            <Route
              path="/registro"
              exact
              element={<Registro></Registro>}
            ></Route>
            <Route path="/home" exact element={<Home></Home>}></Route>
            <Route path="/clientes" exact element={<MostrarClientes />}></Route>
            <Route
              path="/clientes/agregar"
              exact
              element={<AgregarClientes />}
            ></Route>
            <Route
              path="/clientes/editar/:id"
              exact
              element={<EditarClientes />}
            ></Route>
            <Route
              path="/proyectos"
              exact
              element={<MostrarProyectos />}
            ></Route>
            <Route
              path="/proyectos/agregar"
              exact
              element={<AgregarProyectos />}
            ></Route>
            <Route
              path="/proyectos/editar/:id"
              exact
              element={<EditarProyectos />}
            ></Route>
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
