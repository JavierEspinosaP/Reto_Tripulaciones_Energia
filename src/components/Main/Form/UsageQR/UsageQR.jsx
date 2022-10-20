import React, {useState, useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Result from '../Result';

function UsageQR(props) {
  let brand1
  let model1
  let brand2
  let model2
  let session_id

  useEffect(() => {
  brand1= props.data.Brand1
  model1= props.data.Model1
  brand2 = props.data.Brand2
  model2= props.data.Model2
  session_id= props.data.Session_id    
    console.log(model1);
  }, [props])
  



  const [data, setData] = useState({})

  const submit = (event) => {
    event.preventDefault()
    const usage = event.target.usage.value
    setData({session_id, usage, brand1, model1, brand2, model2})
    console.log(data)
  }



  return (
    <div >
     {Object.keys(data).length === 0?<div className="usageqr-container">
      <Link to={"/"}><a className="btn-home" variant="contained"></a></Link>
      <form onSubmit={submit}>
        <input className="input" type="text" name="usage" placeholder="Introduce uso (horas/ciclos)" />
        <input className="send" type="submit" value="Enviar" />
      </form>  
      </div>:<Result data={data}/>} 

    </div>
  )
}

export default UsageQR
