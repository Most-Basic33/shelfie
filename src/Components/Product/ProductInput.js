import React from 'react';
 import './Product.css'

  

 const ProductInput =(props)=>{  
    
     

//   handleChange=(e)=>{
// this.setState({
//     [e.target.name]: e.target.value
// })
        return(
            <div>
            <img src={props.img} alt="pictures of what we selling" />
                  <input
                        type='text'
                        placeholder='Product Name'
                        name='name'
                        value={props.name}
                        onChange={props.handleChange}
                    />
                    <input
                        type='number'
                        placeholder='Price'
                        name='price'
                        value={+props.price}
                        onChange={props.handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Img URL'
                        name='img'
                        value={props.img}
                        onChange={props.handleChange}
                    />
                    <button onClick={props.editItem}>Update</button>
                    </div>
           
        )
    
 }
    export default ProductInput