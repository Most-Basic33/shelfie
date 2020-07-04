import React, { Component } from 'react';
import './Product.css'
import axios from 'axios'
import ProductInput from './ProductInput'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '/api/inventory/',
            name: this.props.inventory.name,
            price: +this.props.inventory.price,
            img: this.props.inventory.img,
            editMode: false

        }
    }
    toggleForm = () => {
        this.setState({
            editMode: !this.state.editMode,

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
    //Trying to figure out how to edit items then do an axios database update
     editItem = () => {
        const { url, name, price, img } = this.state
        this.toggleForm()
const body = {name,price,img}
         axios.put(`${url}${this.props.id}`,body)
            .then(() => {
                this.handleClear()
            })

     }
// const body = {};
//         if(this.state.name == null){
// body.name = name;
//         }else if(this.state.price != null){
//             body.price = price
//         }else if(this.state.url != null){
//             body.img = img
//         }
//         console.log(body)
     
       
    
    handleClear = () => {
        this.setState({
            name: '', price: 0, img: ''
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
                {this.state.editMode ? <ProductInput 
                name={this.state.name}
                price={this.state.price}
                editItem={this.editItem}
                handleChange={this.handleChange}
                 img={this.state.img}
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
                    <button onClick={this.toggleForm} >Edit</button>
                </div>

            </div>
        )
    }
}
export default Product

