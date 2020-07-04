import React, {Component} from 'react';
 import './Product.css'

  

 class ProductInput extends Component{  
    constructor(props){
        super(props);
        this.state ={
            url: '/api/inventory/',
            name:'',
            price:'',
            imgurl:'',
            editMode: false
        }
    } 
    toggleForm=()=>{
        this.setState({
            editMode: !this.state.editMode
        })
    }
    
    handleChange=(e)=>{
this.setState({
    [e.target.name]: e.target.value
})
    }
    render(){
       
        return(
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
                    <button>Update</button>
                    </div>
           
        )
    }
}
    export default ProductInput