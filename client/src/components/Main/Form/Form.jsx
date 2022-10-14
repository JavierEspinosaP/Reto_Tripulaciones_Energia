import React, { useState, useEffect } from 'react';
import Downshift from 'downshift';
import { menuStyles, comboboxStyles } from './shared';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

// const items = [
//   {value: 'apple'},
//   {value: 'pear'},
//   {value: 'orange'},
//   {value: 'grape'},
//   {value: 'banana'},
// ]

const Form = () => {

  const [pokData, setPokData] = useState([])

  useEffect(() => {  

    async function fetchData() {
      try {

        const resDemo = await axios.get("http://desafioapitest-env.eba-kma62rdj.us-east-2.elasticbeanstalk.com/category?category=campanas",{
          headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },})

        // console.log(resDemo);

        // const models = await resDemo.data.Brand

        // const labels = await resPok.data.results

        // const m = await pokemons.map(n => n.name)

        // setPokData(names)
      }
      catch (e) {
        setPokData([])
      }
    }
    fetchData()

  }, [])


  return (
    <div className="formContainer">
<Link   to={"/"}><Button className="btn-back" variant="contained">Volver</Button></Link>
    <Downshift
      onChange={(selection) =>
        alert(selection ? `You selected ${selection}` : 'Selection Cleared')
      }
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
          <label {...getLabelProps()}>Enter a pokemon:</label>
          <Input {...getInputProps()} />
          <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
            &#8595;
          </Button>
          <ul {...getMenuProps()} style={menuStyles}>
            {isOpen &&
              // items aqui es donde se cargan los datos para el autocompletado
              pokData
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
    </div>
    
  )
}

export default Form
