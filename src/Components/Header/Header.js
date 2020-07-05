import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    
    render() {
        return (
            <header>
               
                <section>
                    <h1>
                        Shelfie
         <Link to='/search'><button >Search Products</button></Link>
                        <Link to='/about'> <button>About The Developer</button></Link>
                    </h1>
                </section>
            </header>
        )
    }
}
export default Header;