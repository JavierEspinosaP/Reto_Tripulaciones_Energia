import React, { useState, useEffect, useContext } from 'react';
import Downshift from 'downshift';
import { menuStyles, comboboxStyles } from './shared';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";
import Price from './Price'
import { dataContext } from '../../../context/dataContext';
import { categoryContext } from '../../../context/categoryContext';



// const items = [
//   {value: 'apple'},
//   {value: 'pear'},
//   {value: 'orange'},
//   {value: 'grape'},
//   {value: 'banana'},
// ]

const Form = (props) => {

  const category = props.category
  const [data, setData] = useState({})
  const [brandData, setBrandData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [searchBrandData, setSearchBrandData] = useState([])
  const [searchModelData, setSearchModelData] = useState([])
  const [searchBrandData2, setSearchBrandData2] = useState([])
  const [searchModelData2, setSearchModelData2] = useState([])

  // const [searchId, setSearchId] = useState([])
  const apiKey = process.env.REACT_APP_API_KEY


  useEffect(() => {

    async function fetchData() {
      try {
        // console.log(category);
        const resDemo = await axios.get(`https://whispering-river-01987.herokuapp.com/category?category=${category}&api_key=${apiKey}`)
        console.log(resDemo);

        setData(await resDemo.data)
        setBrandData(await resDemo.data.Brand)
      }
      catch (e) {
        console.log(e);
        // setBrandData(["error"])
        // setModelData(["error"])
      }
    }
    fetchData()

  }, [])


  useEffect(() => {
// console.log(data);
    let searchDataObj = {}
    if (data.Consumption_type == 'permanent') {
      searchDataObj = {
        consumption_type: data.Consumption_type,
        // session_id: data.Session_id,
        brand1 : searchBrandData,
        model1 : searchModelData,
        brand2 : searchBrandData2,
        model2 : searchModelData2,
        usage : 24
      }
    }
    else{
    searchDataObj = {
      consumption_type: data.Consumption_type,
      // session_id: data.Session_id,
      brand1 : searchBrandData,
      model1 : searchModelData,
      brand2 : searchBrandData2,
      model2 : searchModelData2      
    }

    }
    setSearchData(searchDataObj)

  }, [searchModelData2])




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

      
      <div className="header-container">
        <Link to={"/"}><a className="back-btn"></a></Link>
        <p className="device">{renderSwitch(category)}</p>
        <div className="space"></div>
      </div>
      {searchModelData2.length === 0  ? <div>
        <Downshift
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
            <div className="input-container" >
              <label {...getLabelProps()}></label>
              <Input className="input" placeholder='Marca producto 1' {...getInputProps()} />
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
        </Downshift>
        {searchBrandData.length>0?<Downshift
          onChange={(selection) => selection ? setSearchModelData(selection) : null}

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
            <div className="input-container">
              <label {...getLabelProps()}></label>
              <Input className="input" placeholder='Modelo producto 1' {...getInputProps()} />
              <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
                &#8595;
              </Button>
              <ul {...getMenuProps()} style={menuStyles}>
                {isOpen &&
                  // items aqui es donde se cargan los datos para el autocompletado
                  data.Model_by_brand[searchBrandData]
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
        </Downshift>:null}
        {searchModelData.length>0?<Downshift
          onChange={(selection) => selection ? setSearchBrandData2(selection) : null}
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
            <div className="input-container">
              <label {...getLabelProps()}></label>
              <Input className="input" placeholder='Marca producto 2' {...getInputProps()} />
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
        </Downshift>:null}
        {searchBrandData2.length>0?<Downshift
          onChange={(selection) => selection ? setSearchModelData2(selection) : null}

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
            <div className="input-container">
              <label {...getLabelProps()}></label>
              <Input className="input" placeholder='Marca producto 1' {...getInputProps()} />
              <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
                &#8595;
              </Button>
              <ul {...getMenuProps()} style={menuStyles}>
                {isOpen &&
                  // items aqui es donde se cargan los datos para el autocompletado
                  data.Model_by_brand[searchBrandData2]
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
        </Downshift>:null}
      </div> : <Price search={searchData} />}

    </div>

  )
}

export default Form
