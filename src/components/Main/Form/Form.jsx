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

const Form = () => {


  const [data, setData] = useState({})
  const [brandData, setBrandData] = useState([])
  // const [modelData, setModelData] = useState([])
  const [searchBrandData, setSearchBrandData] = useState([])
  // const [searchId, setSearchId] = useState([])



  useEffect(() => {

    async function fetchData() {
      try {
        const resDemo = await axios.get(`http://desafioapitest-env.eba-kma62rdj.us-east-2.elasticbeanstalk.com/category?category=campana_extractora&${process.env.REACT_APP_API_KEY}`)
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


  

  // setModelData(await resDemo.data.Model_by_brand[searchBrandData])



  return (
    <div className="formContainer">

      <Link to={"/"}><Button className="btn-back" variant="contained">Volver</Button></Link>

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
            <label {...getLabelProps()}>Introduce marca:</label>
            <Input {...getInputProps()} />
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

    </div>

  )
}

export default Form
