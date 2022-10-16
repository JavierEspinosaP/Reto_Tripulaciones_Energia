import React, { useState} from 'react'
import Result from '../Result'

function Price(props) {

  const brand = props.data.brand
  const model = props.data.model
  console.log(brand);


  const [data, setData] = useState(brand)



  const submit = (event) => {
    event.preventDefault()
    const price = event.target.price.value
    const usage = event.target.usage.value
    setData({ brand, model, price, usage })
    console.log(data)
  }




  return (
    <div>{data.price === undefined ?
      <form onSubmit={submit}>
        <input type="text" name="price" placeholder="Introduce precio de producto" />
        <input type="text" name="usage" placeholder="Introduce tiempo de uso" />
        <input type="submit" value="" />
      </form>
      :<Result data={data}/>}
    </div>
  )
}

export default Price
