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
                All Lives Matter....with love!
                <p>{today}</p>
                <button onClick={this.goBack} >Return Home</button>
            </div>
        )
    }
}
export default About
