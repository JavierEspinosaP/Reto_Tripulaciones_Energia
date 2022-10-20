import React, { useState, useEffect, useContext} from 'react'
import Result from '../Result'


function Price(props) {

  const data = props.search 
  const [dataSession, setDataSession] = useState({})  
  const [isTrue, setIsTrue] = useState(false)


  console.log(data);
  


  let type = ''

  useEffect(() => {
    setDataSession(data)
    console.log(data.consumption_type);
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
  

  function renderSwitch(data) {
    switch(data) {
      case 'cycle':
        return 'ciclos/semana';
      case 'hour':
        return 'horas/día';
      case 'hours_week':
        return 'horas/semana';
    }
  }

  const regex = /^\d+$/;


  const submit = (event) => {
    event.preventDefault()
    const usage = event.target.usage.value
    if (regex.test(usage)) {
      setDataSession({...data, usage: usage})
      setIsTrue(true)
    }
    setDataSession({...data, usage: usage})
    setIsTrue(true)
  }

  console.log(dataSession);
  return (
  <div className="price-cont">{isTrue == false && data.consumption_type != 'permanent'?

      <form className="price" onSubmit={submit}>
        {console.log(isTrue)}  
        <label className="label" htmlFor="">Introduce uso en {renderSwitch(data.consumption_type)}</label>
        <input className="input" required={true} type="number" pattern="[0-9]+" name="usage" placeholder="Introduce dato" />
        <input className="btn-link-simple" type="submit" value="Visualiza la información" />
      </form>
      :<Result data={dataSession}/>}
    </div>
  )
}

export default Price
