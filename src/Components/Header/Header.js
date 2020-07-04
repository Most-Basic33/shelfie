import React, {Component} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <header>
       
        <section>
        <h1>
        Shelfie 
         <Link to='/product'><button>Dashboard</button></Link> 
          <Link to='/about'> <button>Add Inventory </button></Link>
           </h1>
        </section>
        </header>
    )
    }
}
export default Header;