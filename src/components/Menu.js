import React from 'react'
import { Data } from '../Helpers/Data.js'
import { MenuItem } from '@mui/material';
import '../styles/Menu.css'


export const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key} // bu key değeri unique değer yani benzersiz bir değerdir...
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu
