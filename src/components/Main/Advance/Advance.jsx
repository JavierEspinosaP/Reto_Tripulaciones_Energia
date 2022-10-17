import React, {useState, useContext} from 'react'
import {dataContext} from '../../../context/dataContext'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AdvanceResult from './AdvanceResult'

function Advance() {

const [data, setData] = useState({})
const {dataSession} = useContext(dataContext)

const submit = (event) => {
  event.preventDefault()
  const id = dataSession.id
  const usage = event.target.usage.value
  const price = event.target.price.value
  setData({id,usage,price})
  console.log(data)
}


  return (
    <div>
          <div>
      <Link className="btn-link" to={"/"}><Button sx={{ margin: 3 }} variant="contained">Volver</Button></Link>
     {Object.keys(data).length === 0?
      <form onSubmit={submit}>
        <input type="text" name="usage" placeholder="Introduce meses de uso" />
        <input type="text" name="price" placeholder="Introduce precio de producto" />
        <input type="submit" value="" />
      </form>
      :<AdvanceResult data={data}/>}
    </div>
    </div>
  )
}

export default Advance
