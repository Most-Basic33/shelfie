import React, {Component} from 'react';
import './Dashboard.css';
import Product from '../Product/Product';


class Dashboard extends Component {
  //  console.log(props)
 
  //I cannot use routes because everytime I try to link to this page
  //I get an error saying my map inventory from db is undefined
  render(){
  const mappInventory = this.props.inventory.map((item, index) => {
        return (
      
            <Product  
            deleteItem={this.props.deleteItem} 
            editItem={this.props.editItem} 
            id={item.id} 
            inventory={item} 
            key={index} 
            getInventory={this.props.getInventory}
            />
        )
    })
    return (
        <div className='dash-box'>
        <div >{mappInventory}</div>
        </div>
    )
}
}

export default Dashboard