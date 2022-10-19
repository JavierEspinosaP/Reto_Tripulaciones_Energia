import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { dataContext }  from '../../../../context/dataContext';

function Result(props) {

  const brand1 = props.data.brand1
  const model1 = props.data.model1
  const brand2 = props.data.brand2
  const model2 = props.data.model2
  const usage = props.data.usage
  const session_id = props.data.session_id
  const {dataSession, setDataSession} = useContext(dataContext)
  const [consumption1, setConsumption1] = useState({})
  const [consumption2, setConsumption2] = useState({})
  const [status, setStatus] = useState([])
  
  const apiKey = process.env.REACT_APP_API_KEY

  
  useEffect(() => {

    if (brand1 !== undefined) {
    setDataSession(props.data.session_id)
    console.log(dataSession);      
    async function fetchResult() {
      console.log();
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
    }

  }, [brand1])



  return (
    <div className="results-cont">
      {status.status===200?<div className="results">
      <div className="columns-container">
        <div className="column1">
          <p>Producto 1</p>
          <div>Gasto kWh {consumption1} €/Mes</div>
        </div>
        <div className="column2">
          <p>Producto 2</p>
          <div>Gasto kWh {consumption2} €/Mes</div>
        </div>
      </div>
      
      <Link className="go-advance" to={"/advance"}><button><div></div><p>Gráfico de consumo</p><section></section></button></Link>
      </div>
      :null
      }
    </div>
  )
}

export default Result
