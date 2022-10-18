import React, {useState, useRef} from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Form from '../Form'
import {useForm} from 'react-hook-form'

function Category() {


  const [category, setCategory] = useState([])
  const value = ["dishwasher", "washer"]


  console.log(category);


  return (
    <div className='category'>
      <div className="title-container">
        <Link to={"/"}><a className="back-btn"></a></Link>
        <p className="title-cat">Elige la categoría</p>
        <div></div>
      </div>
      {category.length === 0?<div className="cat-container">
      <button className="dishwasher" onClick={()=>{setCategory("dishwasher")}}><figure></figure><p>Lavavajillas</p></button>
      <button className="washer" onClick={()=>{setCategory("washer")}}><figure></figure><p>Lavadoras</p></button>
      <button className="tv-monitor" onClick={()=>{setCategory("tv/monitor")}}><figure></figure><p>Televisores y monitores</p></button>
      <button className="fridge-freezer" onClick={()=>{setCategory("fridge/freezer")}}><figure></figure><p>Frigoríficos</p></button>
      <button className="light" onClick={()=>{setCategory("light")}}><figure></figure><p>Iluminación</p></button>
      <button className="water-heater" onClick={()=>{setCategory("water_heater")}}><figure></figure><p>Calderas y calentadores</p></button>
      <button className="oven" onClick={()=>{setCategory("oven")}}><figure></figure><p>Hornos</p></button>
      <button className="range-hood" onClick={()=>{setCategory("range_hood")}}><figure></figure><p>Campanas</p></button>
      </div>:<Form category={category}/>}
      <div className="space-container2"></div>
    </div>
  )
}

export default Category