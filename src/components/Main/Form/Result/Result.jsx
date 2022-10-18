import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Result(props) {


  const {brand1, model1, brand2, model2, usage, session_id} = props.data

  const [consumption1, setConsumption1] = useState({})
  const [consumption2, setConsumption2] = useState({})
  const [status, setStatus] = useState([])
  
  const apiKey = process.env.REACT_APP_API_KEY

  
  useEffect(() => {

    async function fetchResult() {

      const resResult = await axios.get(`https://whispering-river-01987.herokuapp.com/calculate?api_key=${apiKey}&session_id=${session_id}&brand1=${brand1}&model1=${model1}&brand2=${brand2}&model2=${model2}&time=${usage}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })
      setStatus(resResult)
      // console.log(resResult.request.responseURL);
      console.log(resResult.data);
      setConsumption1(resResult.data.Cost1)
      setConsumption2(resResult.data.Cost2)
      console.log(consumption1);
      console.log(consumption2);
    }
    fetchResult()
    // eslint-disable-next-line
  }, [])



  return (
    <div>
      {status.status===200?<div>
      <p>Consumo del producto 1: {consumption1} €/Mes</p>
      <p>Consumo del producto 2: {consumption2} €/Mes</p>
      <Link to={"/advance"}><Button className="btn-back" variant="contained">Acceder a avanzado</Button></Link>
      </div>
      :null
      }
    </div>
  )
}

export default Result
