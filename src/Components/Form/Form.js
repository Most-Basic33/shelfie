import React, { Component } from 'react';
import './Form.css'
import axios from 'axios'


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '/api/inventory/',
            name: '',
            price: 0,
            img: ''
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    handleSubmit = (e) => {
        e.preventDefault()
    }
    handleClear = () => {
        this.setState({
            name: '', price: 0, img: ''
        })
    }
addNewProduct=()=>{
const {url, name, price, img} = this.state;

const body = {name, price, img}
console.log(body)
axios.post(`${url}`, body)
.then(() => {
 this.handleClear();
})

}


    render() {
        return (
            <form>
                <div className="form-box">
                <div className="input-box">
                <span>Product Name:</span>
                    <input
                        type='text'
                        placeholder='Product Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                     <span>Product Price:</span>
                    <input
                        type='number'
                        placeholder='Price'
                        name='price'
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                     <span>Product URL:</span>
                    <input
                        type='text'
                        placeholder='Img URL'
                        name='img'
                        value={this.state.img}
                        onChange={this.handleChange}
                    />
                    </div>
                </div>
                 
                <div className='button-box'>
                    <button onClick={this.addNewProduct} >Add</button>
                    <button>Cancel</button>
                    
                </div>

            </form>

        )
    }

}
export default Form
