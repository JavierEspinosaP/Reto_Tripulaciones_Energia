import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

class Home extends Component {
  render() {
    return <div className="home">
      <Link className="btn-link"  to={"/scanner"}><Button sx={{margin: 3}} variant="contained">Scanner QR</Button></Link>
      <Link className="btn-link"  to={"/category"}><Button sx={{margin: 3}} variant="contained">Ingresa manualmente</Button></Link>
    </div>;
  }
}

export default Home;
