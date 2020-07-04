import React, { Component } from 'react';
import './Product.css'
import axios from 'axios'
import ProductInput from './ProductInput'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '/api/inventory/',
            name: '',
            price: '',
            imgurl: '',
            editMode: false

        }
    }
    toggleForm = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    deleteItem = () => {
        const { url } = this.state
        axios.delete(`${url}${this.props.id}`)
            .then(() => {
                this.props.getInventory();
            })
            .catch(err => console.log(err, "error deleting item"))
    }
    editItem = () => {
        const { url } = this.state
        this.toggleForm()

        // axios.put(`${url}${this.props.id}`)
        //     .then(() => {
        //         this.handleClear()
        //     })
    }
    handleClear = () => {
        this.setState({
            name: '', price: 0, imgurl: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //Link Buttons to form
    render() {

        return (
            <div>
                {this.state.editMode ? <ProductInput img={this.props.inventory.img}
                    toggleForm={this.toggleForm}
                /> : null}
                <div className='product-box'>
                    <div className='products'>
                        <h4>ID: {this.props.id}</h4>
                        <h3>{this.props.inventory.name}</h3>
                        <h3>${this.props.inventory.price}</h3>
                        <img src={this.props.inventory.img} alt='The List Of Items We Have For Sale' />
                    </div>
                    <button onClick={this.deleteItem}>Delete</button>
                    <button onClick={this.editItem} >Edit</button>
                </div>

            </div>
        )
    }
}
export default Product

