import React, { Component } from 'react';
import './About.css'
 

class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let date = new Date()
        let today = date.toLocaleDateString()
        console.log(today)
        return(
            <div className='about'>
                    <span>copyright 2020</span>
                    <b>wr-2 Bishop Walker</b>
                All Lives Matter....with love!
                <p>{today}</p>
            </div> 
        )
    }
}
export default About
