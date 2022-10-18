import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return <div className="home">
      <div className="home-top-container">
        <div className="logo-container">
          <figure className="leaf"></figure>
          <p className="home-title">Energreen</p>
        </div>
        <figure className="cover-container"></figure>
        <p className="intro-text">Calcula el consumo de los electrodomésticos escaneando el código QR y ahorra en tu gasto energético.</p>
        <div className="green-container">
          <p className="intro-sub-text">SÉ MÁS GREEN</p>
          <figure className="leaf2"></figure>
        </div>
      </div>
      <div className="home-button-container">
        <Link className="btn-link-scan" to={"/scanner"}><button><div></div><p>Escanea el código QR</p></button></Link>
        <p className="text-select">O si no lo tienes a disposición</p>
        <Link className="btn-link-manual" to={"/form"}><button>Introduce marca y modelo</button></Link>
      </div>
    </div>;
  }
}

export default Home;
