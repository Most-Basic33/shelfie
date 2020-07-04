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
           <button>Add Inventory </button>
           </h1>
        </section>
        </header>
    )
    }
}
export default Header;