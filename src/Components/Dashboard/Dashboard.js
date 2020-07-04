import React from 'react';

import './Dashboard.css';
import Product from '../Product/Product';


const Dashboard = (props) => {
  //  console.log(props)
    const mappInventory = props.inventory.map((item, index) => {
        return (
      
            <Product  
            deleteItem={props.deleteItem} 
            editItem={props.editItem} 
            id={item.id} 
            inventory={item} 
            key={index} 
            getInventory={props.getInventory}
            />
        )
    })
    return (
        <div className='dash-box'>
        <div >{mappInventory}</div>
        </div>
    )
}
export default Dashboard