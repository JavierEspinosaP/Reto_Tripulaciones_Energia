import React, { useState, useEffect } from 'react';
import Downshift from 'downshift';
import { menuStyles, comboboxStyles } from './shared';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";
import Model from './Model'

// const items = [
//   {value: 'apple'},
//   {value: 'pear'},
//   {value: 'orange'},
//   {value: 'grape'},
//   {value: 'banana'},
// ]

const Form = (props) => {


  const [data, setData] = useState({})
  const [brandData, setBrandData] = useState([])
  // const [modelData, setModelData] = useState([])
  const [searchBrandData, setSearchBrandData] = useState([])
  // const [searchId, setSearchId] = useState([])
  const category = props.category
  const apiKey = process.env.REACT_APP_API_KEY


  useEffect(() => {

    async function fetchData() {
      try {
        console.log(category);
        const resDemo = await axios.get(`https://whispering-river-01987.herokuapp.com/category?category=${category}&api_key=${apiKey}`)
        console.log(resDemo);
        setData(await resDemo.data)
        setBrandData(await resDemo.data.Brand)
        // setModelData(await resDemo.data.Model_by_brand)
        // setSearchId(await resDemo.data.Session_id)
        // console.log(brandData);

        // console.log(resDemo.data.Model_by_brand['whirlpool']);
      }
      catch (e) {
        console.log(e);
        // setBrandData(["error"])
        // setModelData(["error"])
      }
    }
    fetchData()

  }, [])


  function renderSwitch(category) {
    switch(category) {
      case 'dishwasher':
        return 'Lavavajillas';
      case 'washer':
        return 'Lavadoras';
      case 'tv/monitor':
        return 'Televisores';
      case 'fridge/freezer':
        return 'Frigoríficos';
      case 'light':
        return 'Iluminación';
      case 'water_heater':
        return 'Calentadores';
      case 'oven':
        return 'Hornos';
      case 'range_hood':
        return 'Campanas';
    }
  }

  // setModelData(await resDemo.data.Model_by_brand[searchBrandData])



  return (
    <div className="form">

      <p className="name-device">{renderSwitch(category)}</p>

      {searchBrandData.length === 0 ? <Downshift
        onChange={(selection) => selection ? setSearchBrandData(selection) : null}
        itemToString={(item) => (item ? item : '')}
      >

        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getLabelProps,
          getToggleButtonProps,
          inputValue,
          highlightedIndex,
          selectedItem,
          isOpen,
        }) => (
          <div style={comboboxStyles}>
            <label {...getLabelProps()}></label>
            <input className="input" {...getInputProps()} placeholder="marca" />
            <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
              &#8595;
            </Button>
            <ul {...getMenuProps()} style={menuStyles}>
              {isOpen &&
                // items aqui es donde se cargan los datos para el autocompletado
                brandData
                  .filter((item) => !inputValue || item.includes(inputValue.toLowerCase()))
                  .map((item, index) => (
                    <List
                      {...getItemProps({
                        key: `${item}${index}`,
                        item,
                        index,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item}
                    </List>

                  ))}
            </ul>
          </div>
        )}
      </Downshift> : <Model data={data} search={searchBrandData}/>}
      <div className="space"></div>
    </div>

  )
}

export default Form
