import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MyResponsiveLine } from './Graph';
import { dataContext } from '../../../../context/dataContext'

function AdvanceResult(props) {

  const id = props.data.id
  const usage = props.data.usage
  const price = props.data.price1
  const price2 = props.data.price2

  const [consumption, setConsumption] = useState({})
  const [status, setStatus] = useState([])
  const { dataSession, setDataSession } = useContext(dataContext)
  const [json, setJson] = useState([])
  const [rangeMax, setRangeMax] = useState(10);
  const [yRangeMax, setYRangeMax] = useState(500);
  const [dataChart, setDataChart] = useState({})
  const apiKey = process.env.REACT_APP_API_KEY
  const [initialPrice, setInitialPrice] = useState([])



  useEffect(() => {

    if (id.length > 0) {

      async function fetchResult() {
        console.log(dataSession);
        const resResult = await axios.get(`https://whispering-river-01987.herokuapp.com/advanced?api_key=${apiKey}&session_id=${dataSession}&months=${usage}&price1=${price}&price2=${price2}`)
        const resData = await resResult.data
        console.log(resResult);
        let endYear = await resData.Total_years
        let endValue1 = await resData.EndValue1
        let endValue2 = await resData.EndValue2
        console.log("esto es endValue", endValue1);
        console.log("esto es el precio inicial", price);
        console.log("esto es precio 2 inicial", price2);
        let endValue

        if (endValue1>endValue2) {
          endValue = endValue1
        }
        else {
          endValue = endValue2
        }


        if(price>price2){
          setInitialPrice(price)
        }
        else{
          setInitialPrice(price2)
        }

        const statusOk = resResult.status

        setStatus(statusOk)
        console.log(endValue);



        const xPoints = endYear / 10
        const arrXPoints = []

        for (let i = 0; i < 10; i++) {
          arrXPoints.push(xPoints * i)
        }

        const brandModel = [dataSession.brand, dataSession.model].toString()

        console.log(Number(price));

        const toHSLObject = hslStr => {
          const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);
          return { hue, saturation, lightness };
        };

        const initialData1 = {
          id: resResult.data.brand1,
          color: toHSLObject('hsl(127, 100%, 50%)'),
          data: [{
            x: 0,
            y: Number(price)
          }]
        }

        const initialData2 = {
          id: resResult.data.brand2,
          color: toHSLObject('hsl(127, 100%, 50%)'),
          data: [{
            x: 0,
            y: Number(price2)
          }]
        }

        const dataChart1 = initialData1.data
        const dataChart2 = initialData2.data
        setDataChart({dataChart1:dataChart1, dataChart2:dataChart2}) 
        const chart = [initialData1, initialData2]
        const yPointValue = (endValue1 - price)/10
        const yPointValue2 = (endValue2 - price2)/10

        for (let i = 1; i < 10; i++) {
          dataChart1.push({
            x: arrXPoints[i],
            y: (Number(price)+yPointValue*i)
          })
          console.log(endValue);
        }

        for (let i = 1; i < 10; i++) {
          dataChart2.push({
            x: arrXPoints[i],
            y: (Number(price2)+yPointValue2*i)
          })
          console.log(endValue)
        }

        setConsumption(resResult.data)
        console.log(consumption);
        setRangeMax(endYear)
        if (price > price2) {
          setYRangeMax(price * 4)
        }
        else { setYRangeMax(price2 * 4) }
        setJson(chart)
        console.log(rangeMax, yRangeMax);

      }
      fetchResult()
      // eslint-disable-next-line 
    }

  }, [])


  return (
    <div>
      {status === 200 ? <div className="chartContainer">
        <MyResponsiveLine initialPrice={initialPrice}  data={json} rangeMax={rangeMax} yRangeMax={yRangeMax} />
      </div> :"null"}


    </div>
  )
}

export default AdvanceResult
