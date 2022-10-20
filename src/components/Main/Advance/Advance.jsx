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
    setData({ id, usage, price1, price2 })
    console.log(dataSession);
    console.log(data)
  }


  return (
    <div>
      <div>

        {Object.keys(data).length === 0 ?
          <div>

            <form className="advance-form" onSubmit={submit}>
              <div className="title-container">
                <Link to={"/"}><a className="home-back"></a></Link>
                <p>Calcula la amortización</p>
                <div></div>
              </div>
              <input className="meses-uso" type="text" name="usage" placeholder="Meses de uso" />
              <input className="prod1" type="text" name="price1" placeholder="Precio del producto 1" />
              <input className="prod2" type="text" name="price2" placeholder="Precio del producto 2" />
              <input className="send" type="submit" value="Enviar" />
            </form>
          </div>
          : <AdvanceResult data={data} />}
      </div>
    </div>
  )
}

export default Advance
