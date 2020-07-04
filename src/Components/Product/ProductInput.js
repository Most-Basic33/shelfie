import React, {Component} from 'react';
 import './Product.css'

  

 class ProductInput extends Component{  
    constructor(props){
        super(props);
       
        }
     
    
  
//   handleChange=(e)=>{
// this.setState({
//     [e.target.name]: e.target.value
// })
    
    render(){
       
        return(
            <div>
            <img src={this.props.img} alt="pictures of what we selling" />
                  <input
                        type='text'
                        placeholder='Product Name'
                        name='name'
                        value={this.props.name}
                        onChange={this.props.handleChange}
                    />
                    <input
                        type='number'
                        placeholder='Price'
                        name='price'
                        value={this.props.price}
                        onChange={this.props.handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Img URL'
                        name='img'
                        value={this.props.img}
                        onChange={this.props.handleChange}
                    />
                    <button onClick={this.props.editItem}>Update</button>
                    </div>
           
        )
    }
 }
    export default ProductInput