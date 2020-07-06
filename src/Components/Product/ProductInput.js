import React from 'react';
 import './Product.css'

  
//made all input required  in the add form duh
 const ProductInput =(props)=>{  
        return(
            <div>
            <img src={props.img} alt="pictures of what we selling" />
                  <input
                        type='text'
                        placeholder='Product Name'
                        name='name'
                        required
                        value={props.name}
                        onChange={props.handleChange}
                    />
                    <input
                        type='number'
                        placeholder='Price'
                        name='price'
                        required
                        value={+props.price}
                        onChange={props.handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Img URL'
                        name='img'
                        required
                        value={props.img}
                        onChange={props.handleChange}
                    />
                    <button onClick={props.editItem}>Update</button>
                    </div>
           
        )
    
 }
    export default ProductInput