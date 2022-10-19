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
  const [cost1, setCost1] = useState({})
  const [cost2, setCost2] = useState({})
  const [consumption1, setConsumption1] = useState({})
  const [consumption2, setConsumption2] = useState({})
  const [label1, setLabel1] = useState({})
  const [label2, setLabel2] = useState({})
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
      setCost1(resResult.data.Cost1)
      setCost2(resResult.data.Cost2)
      setConsumption1(resResult.data.consumption1)
      setConsumption2(resResult.data.consumption2)
      setLabel1(resResult.data.label1)
      setLabel2(resResult.data.label2)
      console.log(cost1);
      console.log(cost2);
      console.log(consumption1);
      console.log(consumption2);
      console.log(label1);
      console.log(label2);
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
          <section className="div-title1"> <p className="t1p1">{brand1.charAt(0).toUpperCase()+brand1.slice(1)}</p> <p className="t1p2">{model1}</p></section>
          <div>Gasto kWh {cost1} €/Mes</div>
          <div>Gasto/ciclo {consumption1} kWh</div>
          <figure><img src={label1}/></figure>
        </div>
        <div className="column2">
          <p>Producto 2</p>
          <section className="div-title2"> <p className="t2p1">{brand2.charAt(0).toUpperCase()+brand2.slice(1)}</p> <p className="t2p2">{model2}</p></section>
          <div>Gasto kWh {cost2}{} €/Mes</div>
          <div>Gasto/ciclo {consumption2} kWh</div>
          <figure><img src={label2}/></figure>
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
