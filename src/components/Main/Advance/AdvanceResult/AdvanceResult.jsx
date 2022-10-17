import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import {MyResponsiveLine} from './Graph';
import {dataContext} from '../../../../context/dataContext'

function AdvanceResult(props) {

  const id = props.data.id
  const usage = props.data.usage
  const price = props.data.price

  const [consumption, setConsumption] = useState({})
  const [status, setStatus] = useState([])
  const {dataSession, setDataSession} = useContext(dataContext)
  const [json, setJson] = useState([])
  const [rangeMax, setRangeMax] = useState(50);
  const [yRangeMax, setYRangeMax] = useState(500);


  useEffect(() => {

    async function fetchResult() {

      const resResult = await axios.get(`http://desafioapitest-env.eba-kma62rdj.us-east-2.elasticbeanstalk.com/advanced?session_id=${id}&months=${usage}&price=${price}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })
      const endYear = await resResult.data.end_year
      const endValue = await resResult.data.end_value
      setStatus(resResult)
      console.log(status);
      const brandModel = [dataSession.brand, dataSession.model].toString()

      console.log(brandModel);

      const initialData = [{
        id: dataSession.brand,
        "color": "hsl(285, 70%, 50%)",
        data:[{x: 0,
        y: Number(price)}]
        
      }]
      const dataChart = initialData[0].data
      // const chart = [initialData]
   
      for (let i = 1; i < endYear; i++) {
        dataChart.push({
          x: i,         
          y: Number(endValue/(1/(i/endYear)))
        })
      }

      setConsumption(resResult.data)
      console.log(consumption);
      setRangeMax(endYear)
      setJson(initialData)
      
    }
    fetchResult()
    // eslint-disable-next-line
  }, [])




  return (
    <div>
      <div className="chartContainer">
       <MyResponsiveLine data={[...json]} rangeMax={rangeMax} yRangeMax={yRangeMax} />        
      </div>

    </div>
  )
}

export default AdvanceResult
