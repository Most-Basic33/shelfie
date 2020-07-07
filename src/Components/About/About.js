import React, { Component } from 'react';
import './About.css'


class About extends Component {
   
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        let date = new Date()
        let today = date.toLocaleDateString()
        console.log(today)
        return (
            <div className='about'>
                <p>copyright 2020 </p>
                <b>wr-2 Bishop Walker </b>
                <span className='span1' >All Lives Matter</span>....with love!
                <button className='big-button' onClick={this.goBack} >Go Back</button>
                <p>{today}</p>
                
            </div>
        )
    }
}
export default About
