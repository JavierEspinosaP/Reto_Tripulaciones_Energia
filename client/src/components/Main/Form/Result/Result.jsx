import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Result(props) {

  const brand = props.data.brand
  const model = props.data.model
  const price = props.data.price
  const usage = props.data.usage

  const [consumption, setConsumption] = useState({})
  const [status, setStatus] = useState([])

  useEffect(() => {

    async function fetchResult() {
      const resResult = await axios.get(`http://desafioapitest-env.eba-kma62rdj.us-east-2.elasticbeanstalk.com/calculate?brand=${brand}&model=${model}&price=${price}&hours_month=30&hours_day=${usage}`, {
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
  }, [])



  return (
    <div>
      {status.status==200?<p>ESTO ES EL CONSUMO: {consumption}</p>:null}
    </div>
  )
}

export default Result
