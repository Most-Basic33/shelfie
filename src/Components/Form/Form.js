import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
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
            name: '', price: 0, imgurl: ''
        })
    }

    render() {
        return (
            <form>
                <div>
                    <input
                        type='text'
                        placeholder='Product Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='number'
                        placeholder='Price'
                        name='price'
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Img URL'
                        name='imgurl'
                        value={this.state.imgurl}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='button_form'>
                    <button>Add</button>
                    <button>Cancel</button>
                </div>

            </form>

        )
    }

}
export default Form
