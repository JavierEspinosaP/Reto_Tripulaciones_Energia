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
    <div>
      <Link className="btn-link" to={"/"}><Button sx={{ margin: 3 }} variant="contained">Volver</Button></Link>
      {/* <p>{brand}</p>
      <p>{model}</p> */}
     {/* {dataSession.length < 2? */}
      <form onSubmit={submit}>
        <input type="text" name="usage" placeholder="Introduce tiempo de uso" />
        <input type="submit" value="" />
      </form>
      :<Result data={data}/>
    </div>
  )
}

export default UsageQR
