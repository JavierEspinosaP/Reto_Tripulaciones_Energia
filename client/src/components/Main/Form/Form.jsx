import React from 'react'
import Downshift from 'downshift'
import {menuStyles, comboboxStyles} from './shared'
import Input from '@mui/material/Input'
import List from '@mui/material/List'
import Button from '@mui/material/Button'


const items = [
  {value: 'apple'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
]


const Form = () => {

return(
  <Downshift
    onChange={(selection) =>
      alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
    }
    itemToString={(item) => (item ? item.value : '')}
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
        <label {...getLabelProps()}>Enter a fruit:</label>
        <Input {...getInputProps()} />
        <Button {...getToggleButtonProps()} aria-label={'toggle menu'}>
          &#8595;
        </Button>
        <ul {...getMenuProps()} style={menuStyles}>
          {isOpen &&
            items
              .filter((item) => !inputValue || item.value.includes(inputValue))
              .map((item, index) => (
                <List
                  {...getItemProps({
                    key: `${item.value}${index}`,
                    item,
                    index,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item.value}
                </List>
              ))}
        </ul>
      </div>
    )}
  </Downshift>
)
}

export default Form
