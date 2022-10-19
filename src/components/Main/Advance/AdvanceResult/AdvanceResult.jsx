import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import {MyResponsiveLine} from './Graph';
import {dataContext} from '../../../../context/dataContext'

function AdvanceResult(props) {

  const id = props.data.id
  const usage = props.data.usage
  const price = props.data.price1
  const price2 = props.data.price2

  const [consumption, setConsumption] = useState({})
  const [status, setStatus] = useState([])
  const {dataSession, setDataSession} = useContext(dataContext)
  const [json, setJson] = useState([])
  const [rangeMax, setRangeMax] = useState(50);
  const [yRangeMax] = useState(500);
  const apiKey = process.env.REACT_APP_API_KEY



  useEffect(() => {

    if(dataSession.length>0){

     async function fetchResult() {
      console.log(dataSession);
      const resResult = await axios.get(`https://whispering-river-01987.herokuapp.com/advanced?api_key=${apiKey}&session_id=${dataSession}&months=${usage}&price1=${price}&price2=${price2}`)
      const statusOk = resResult.status
      setStatus(statusOk)

      console.log(resResult);
      // const endYear = await resResult.data.end_year
      // const endValue = await resResult.data.end_value
      // const brandModel = [dataSession.brand, dataSession.model].toString()

      // console.log(brandModel);

      // const initialData = [{
      //   id: dataSession.brand,
      //   "color": "hsl(285, 70%, 50%)",
      //   data:[{x: 0,
      //   y: Number(price)}]
        
      // }]
      // const dataChart = initialData[0].data
      // const chart = [initialData]
   
      // for (let i = 1; i < endYear; i++) {
      //   dataChart.push({
      //     x: i,         
      //     y: Number(endValue/(1/(i/endYear)))
      //   })
      // }

      // setConsumption(resResult.data)
      // console.log(consumption);
      // setRangeMax(endYear)
      // setJson(initialData)
      
    }
    fetchResult()
    // eslint-disable-next-line 
    }
    
  }, [])



 
  return (
    <div>
      {/* {status === 200 ?<div className="chartContainer">
       <MyResponsiveLine data={[...json]} rangeMax={rangeMax} yRangeMax={yRangeMax} />        
      </div>: null} */}


    </div>
  )
}

export default AdvanceResult
