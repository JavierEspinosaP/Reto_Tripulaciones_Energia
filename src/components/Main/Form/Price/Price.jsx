import React, { useState, useEffect} from 'react'
import Result from '../Result'

function Price(props) {

  const brand = props.data.brand
  const model = props.data.model
  const id = props.data.session_id

  console.log(brand);


  const [data, setData] = useState({})

  useEffect(() => {
    console.log(data)
// eslint-disable-next-line no-alert
  }, [])
  

  const submit = (event) => {
    event.preventDefault()
    const usage = event.target.usage.value
    setData({id,usage,brand,model})
    console.log(data)
  }




  return (
    <div>{Object.keys(data).length === 0?
      <form onSubmit={submit}>
        <input type="text" name="usage" placeholder="Introduce tiempo de uso" />
        <input type="submit" value="" />
      </form>
      :<Result data={data}/>}
    </div>
  )
}

export default Price
