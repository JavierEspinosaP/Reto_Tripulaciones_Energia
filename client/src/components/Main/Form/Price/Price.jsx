import React, {useContext} from 'react'
import {useForm} from 'react-hook-form';
import { Input } from '../shared';
import {dataContext} from '../../../../context/dataContext'
import e from 'express';

function Price() {

  const { register, handleSubmit } = useForm();


  const [data, setData] = useContext(dataContext)


  const submit = handleSubmit(  
    (value)=>{
    setData({
      brand: data.brand,
      model:data.model,
      price: value
    })
    console.log(data)
  })      
    


  return (
    <div>
      <form onSubmit={(e)=> submit(e.target.value)}>
        <input type="text" placeholder="Introduce precio de producto"/>
        <input type="submit" value="" />
      </form>
    </div>
  )
}

export default Price
