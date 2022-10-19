import React, { useState, useEffect, useContext} from 'react'
import Result from '../Result'
import { dataContext }  from '../../../../context/dataContext';

function Price(props) {

  const data = props.search

  // session_id: data.Session_id,
  // brand1 : searchBrandData,
  // model1 : searchModelData,
  // brand2 : searchBrandData2,
  // model2 : searchModelData2

  const [dataSession, setDataSession] = useState({})




  const submit = (event) => {
    event.preventDefault()
    const usage = event.target.usage.value

    setDataSession({...data, usage: usage})
  }



console.log(dataSession);
  return (
  <div>{Object.keys(dataSession).length === 0?
      <form onSubmit={submit}>
        <input type="text" name="usage" placeholder="Introduce tiempo de uso" />
        <input type="submit" value="" />
      </form>
      :<Result data={dataSession}/>}
    </div>
  )
}

export default Price
