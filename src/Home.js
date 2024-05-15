import React from "react";
import ContentHeader from "./components/ContentHeader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SidebarContainer from "./components/SidebarContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Dashboard"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-4 col-6">
                <div className="small-box bg-teal shadow-lg">
                  <div className="inner">
                    <h3>Clientes</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-user"></i>
                  </div>
                  <Link to={"/clientes"} className="small-box-footer">
                    Ver clientes
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-6">
                <div className="small-box bg-indigo shadow-lg">
                  <div className="inner">
                    <h3>Proyectos</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <Link to={"/proyectos"} className="small-box-footer">
                    Ver proyectos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
