import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import {dataContext} from '../../../../context/dataContext';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Result(props) {

  const brand = props.data.brand
  const model = props.data.model
  const usage = props.data.usage
  const id = props.data.id

  const [consumption, setConsumption] = useState({})
  const [status, setStatus] = useState([])
  const {setDataSession} = useContext(dataContext)


  useEffect(() => {

    async function fetchResult() {
      setDataSession({id:id,brand: brand, model:model})
      const data = {
        id:id, 
        usage:usage, 
        brand: brand, 
        model: model
      }
      console.log(data);
      const resResult = await axios.get(`http://desafioapitest-env.eba-kma62rdj.us-east-2.elasticbeanstalk.com/calculate?session_id=${id}&hours_day=${usage}&brand=${brand}&model=${model}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })
      setStatus(resResult)
      console.log(resResult);
      setConsumption(resResult.data.Cost)
      console.log(consumption);
    }
    fetchResult()
    // eslint-disable-next-line
  }, [])



  return (
    <div>
      {status.status===200?<div>
      <p>ESTO ES EL CONSUMO: {consumption}</p>
      <Link to={"/advance"}><Button className="btn-back" variant="contained">Acceder a avanzado</Button></Link>
      </div>
      :null
      }
    </div>
  )
}

export default Result
