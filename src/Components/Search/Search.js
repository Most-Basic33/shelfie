import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Search.css'


class Search extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            name: '',
            url: '/api/inventory/',
            product: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    searchById = () => {
        const { url, id } = this.state
        axios.get(`${url}${id}`)
            .then(res => {
                this.setState({
                    product: res.data
                })
            })
            .catch(err => console.log(err, 'error in search by ID'))
    }
    searchByName = () => {
        const { name } = this.state
        axios.get(`/api/inventorys/${name}`)
            .then(res => {
                this.setState({
                    product: res.data
                })
            })
            .catch(err => console.log(err, 'error at SearchByName'))
    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {






        console.log(this.state.product[0])
        return (
            <Link className='forms' to='/search'>
                <div >
                    <h3>id:{this.state.product.id}</h3>
                    <h3>name:{this.state.product.name}</h3>
                    <h3>price:{this.state.product.price}</h3>
                          Pic:<img src={this.state.product.img} alt=' Search Item' />

                </div>
                <form>

                    <input
                        type='number'
                        name='id'
                        placeholder=' --Search by ID'
                        onChange={this.handleChange}
                    />
                    <button onClick={this.searchById} >Search ID</button>

                    <input
                        type='text'
                        name='name'
                        placeholder='Search By Name'
                        onChange={this.handleChange}
                    />
                    <button onClick={this.searchByName}>Search Name</button>

                </form>
                <div>
                    <div>
                        <button onClick={this.goBack} >Return Home</button>
                    </div>
                </div>
            </Link>
        )
    }
}
export default Search
