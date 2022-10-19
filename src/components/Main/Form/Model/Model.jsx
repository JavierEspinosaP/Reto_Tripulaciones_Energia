
import React, { useState, useEffect, useContext } from 'react';
import Downshift from 'downshift';
import { menuStyles, comboboxStyles } from '../shared';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Price from '../Price'
import { dataContext }  from '../../../../context/dataContext';
import {productOneContext} from '../../../../context/productOneContext'
import Form from '../Form'

function Model(props) {

  // const modelsData = props.data
  const dataProps = props.data
  const searchBrandData = props.search
  const {dataSession, setDataSession} = useContext(dataContext)
  const [searchModelData, setSearchModelData] = useState('')
  const {setProductOneTrue} = useContext(productOneContext)

  const [data, setData] = useState({})


  useEffect(() => {
  
  setData({
    brand:searchBrandData,
    model:searchModelData,
    session_id:dataProps.Session_id
  })
  console.log(data);
  if (dataSession.length>0) {
    console.log(dataSession);
    setDataSession(...dataSession,...data)
  }
  setDataSession(data)
  console.log(dataSession);
  setProductOneTrue(true)

  // eslint-disable-next-line
  }, [searchModelData])// eslint-disable-next-line
  

  return (
    <div>
      {dataSession.length<4?
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
      </Downshift>:<Form data={data}/>
      }
    </div>
  )
}

export default Model