import React, { useState, useContext } from 'react'
import { dataContext } from '../../../context/dataContext'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AdvanceResult from './AdvanceResult'

function Advance() {

  const [data, setData] = useState({})
  const { dataSession } = useContext(dataContext)


  const submit = (event) => {
    event.preventDefault()
    const id = dataSession
    const usage = event.target.usage.value
    const price1 = event.target.price1.value
    const price2 = event.target.price2.value 
    console.log(id, usage, price1, price2);
    setData({ id, usage, price1, price2 })
    console.log(dataSession);
    console.log(data)
  }


  return (
    <div>
      <div>
        <Link className="btn-link" to={"/"}><Button sx={{ margin: 3 }} variant="contained">Volver</Button></Link>
        {Object.keys(data).length === 0 ?
          <div>
            <form onSubmit={submit}>
              <input type="text" name="usage" placeholder="Introduce meses de uso" />
              <input type="text" name="price1" placeholder="Introduce precio del segundo producto" />
              <input type="text" name="price2" placeholder="Introduce precio del segundo producto" />
              <input type="submit" value="" />
            </form>
            </div>
          : <AdvanceResult data={data} />}
      </div>
    </div>
  )
}

export default Advance
