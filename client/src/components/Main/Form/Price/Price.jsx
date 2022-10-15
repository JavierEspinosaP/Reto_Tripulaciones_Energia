import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form';
import { Input } from '../shared';
import {dataContext} from '../../../../context/dataContext'

function Price(props) {

  const { register, handleSubmit } = useForm();

  const brand = props.data.brand
  const model = props.data.model
  console.log(brand);


  const [data, setData] = useState(brand)
  


  const submit = (event)=>{
    event.preventDefault()
    const price = event.target.price.value
    const usage = event.target.usage.value
    const newData = {price, usage}
    setData({brand, model, price, usage})
    console.log(data)  
  }

    


  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" name="price" placeholder="Introduce precio de producto"/>
        <input type="text" name="usage" placeholder="Introduce tiempo de uso"/>
        <input type="submit" value=""  />
      </form>
    </div>
  )
}

export default Price
