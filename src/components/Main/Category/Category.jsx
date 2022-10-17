import React from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className='category'>
      <Link to={"/form"}><a>Lavavajillas</a></Link>
      <Link to={"/form"}><a>Lavadora/ secadora</a></Link>
      <Link to={"/form"}><a>Televisores</a></Link>
      <Link to={"/form"}><a>Monitores</a></Link>
      <Link to={"/form"}><a>Frigoríficos y congeladores</a></Link>
      <Link to={"/form"}><a>Aire acondicionado</a></Link>
      <Link to={"/form"}><a>Hornos</a></Link>
      <Link to={"/form"}><a>Campanas extractoras</a></Link>
      <Link to={"/form"}><a>Calentadores</a></Link>
      <Link to={"/form"}><a>Fuentes lumínicas</a></Link>
    </div>
  )
}

export default Category