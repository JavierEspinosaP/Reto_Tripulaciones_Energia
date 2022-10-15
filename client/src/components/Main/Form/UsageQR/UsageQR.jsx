import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function UsageQR(props) {

  const brand = props.data.Brand
  const model = props.data.Model
  return (
    <div>
      <Link className="btn-link" to={"/"}><Button sx={{ margin: 3 }} variant="contained">Volver</Button></Link>
      <p>{brand}</p>
      <p>{model}</p>
    </div>
  )
}

export default UsageQR
