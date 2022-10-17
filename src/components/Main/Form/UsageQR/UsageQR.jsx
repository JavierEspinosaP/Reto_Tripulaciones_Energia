import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Result from '../Result'

function UsageQR(props) {

  const brand = props.data.Brand
  const model = props.data.Model
  const id = props.data.Session_id

  const [data, setData] = useState({})

  useEffect(() => {
    console.log(data)
// eslint-disable-next-line no-alert
  }, [])
  

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
     {Object.keys(data).length === 0?
      <form onSubmit={submit}>
        <input type="text" name="usage" placeholder="Introduce tiempo de uso" />
        <input type="submit" value="" />
      </form>
      :<Result data={data}/>}
    </div>
  )
}

export default UsageQR
