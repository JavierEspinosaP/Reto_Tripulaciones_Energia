import React, {useState, useRef, useContext} from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Form from '../Form'

function Category() {


  const [category, setCategory] = useState([])


  console.log(category);


  return (
    <div className='category'>
      {category.length === 0?<div>
      <button onClick={()=>{setCategory("dishwasher")}}>Lavavajillas</button>
      <button onClick={()=>{setCategory("washer")}}>Lavadora/ secadora</button>
      <button onClick={()=>{setCategory("tv/monitor")}}>Televisores y monitores</button>
      <button onClick={()=>{setCategory("fridge/freezer")}}>Frigoríficos y congeladores</button>
      <button onClick={()=>{setCategory("oven")}}>Hornos</button>
      <button onClick={()=>{setCategory("range_hood")}}>Campanas extractoras</button>
      <button onClick={()=>{setCategory("water_heater")}}>Calentadores</button>
      <button onClick={()=>{setCategory("light")}}>Fuentes lumínicas</button></div>:<Form category={category}/>}
    </div>
  )
}

export default Category