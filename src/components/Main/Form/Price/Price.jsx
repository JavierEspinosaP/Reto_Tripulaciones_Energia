import React, { useState, useEffect, useContext} from 'react'
import Result from '../Result'
import { dataContext }  from '../../../../context/dataContext';

function Price(props) {

  const data = props.search 
  const [dataSession, setDataSession] = useState({})  


  console.log(data);
  


  let type = ''

  useEffect(() => {
    setDataSession(data)
    switch(data.consumption_type){
      case 'cycle':
      type = "Ciclos/semana"
      break;
      case 'hours':
      type = 'Horas al día'
      break;
      case 'hours_week':
      type = 'Horas a la semana'
      break;
    }

  }, [data])
  



  const submit = (event) => {
    event.preventDefault()
    const usage = event.target.usage.value

    setDataSession({...data, usage: usage})
  }



console.log(dataSession);
  return (
  <div>{Object.keys(dataSession).length === 0 || data.consumption_type != 'permanent'?
      <form onSubmit={submit}>
        {console.log(dataSession)}
        <label htmlFor="">Introduce tiempo de uso en {type}</label>
        <input type="text" name="usage" placeholder="Introduce tiempo de uso" />
        <input type="submit" value="" />
      </form>
      :<Result data={dataSession}/>}
    </div>
  )
}

export default Price
