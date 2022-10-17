
import React, { useState, useEffect } from 'react';
import Downshift from 'downshift';
import { menuStyles, comboboxStyles } from '../shared';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Price from '../Price'

function Model(props) {

  // const modelsData = props.data
  const dataProps = props.data
  const searchBrandData = props.search

  const [searchModelData, setSearchModelData] = useState('')

  const [data, setData] = useState({})


  useEffect(() => {
  
  setData({
    brand:searchBrandData,
    model:searchModelData,
    session_id:dataProps.Session_id
  })
  console.log(data);

  // eslint-disable-next-line
  }, [searchModelData])// eslint-disable-next-line
  

  return (
    <div>
      {searchModelData.length === 0?
      <Downshift
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
          <div style={comboboxStyles}>
            <label {...getLabelProps()}>Introduce modelo:</label>
            <Input {...getInputProps()} />
            <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
              &#8595;
            </Button>
            <ul {...getMenuProps()} style={menuStyles}>
              {isOpen &&
                // items aqui es donde se cargan los datos para el autocompletado
                dataProps.Model_by_brand[searchBrandData]
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
      </Downshift>:<Price data={data}/>
      }
    </div>
  )
}

export default Model