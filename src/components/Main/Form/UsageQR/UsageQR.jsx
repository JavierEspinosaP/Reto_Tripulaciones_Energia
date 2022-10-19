import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Result from '../Result';
import {dataContext} from '../../../../context/dataContext';

function UsageQR(props) {

  const [dataSession] = useContext(dataContext)
  const brand = props.data.Brand
  const model = props.data.Model
  const id = props.data.Session_id

  const [data, setData] = useState({})


  console.log(brand, model, id);
  const submit = (event) => {
    event.preventDefault()
    const usage = event.target.usage.value
    setData({id,usage,brand,model})
    console.log(data)
  }



  return (
    <div>
      <Link className="btn-link" to={"/"}><Button sx={{ margin: 3 }} variant="contained">Volver</Button></Link>
      <p>{brand}</p>
      <p>{model}</p>
     {dataSession.length < 2?
      <form onSubmit={submit}>
        <input type="text" name="usage" placeholder="Introduce tiempo de uso" />
        <input type="submit" value="" />
      </form>
      :<Result data={data}/>}
    </div>
  )
}

export default UsageQR
