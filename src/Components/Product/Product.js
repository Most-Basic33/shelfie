 import React, {Component} from 'react';
 import './Product.css'
 import axios from 'axios'
 import Product_Input from './Product_Input'

 class Product extends Component{  
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
    deleteItem=()=>{
        const {url} = this.state
    axios.delete(`${url}${this.props.id}`)
    .then(() =>{
        this.props.getInventory();
    })    
    .catch(err=>console.log(err, "error deleting item"))
      }
      editItem=()=>{
        const {url} = this.state
          this.toggleForm()
        
            axios.put(`${url}${this.props.id}`)
         .then(()=>{
           this.handleClear()
          })
          }
          handleClear = () => {
            this.setState({
                name: '', price: 0, imgurl: ''
            })
        }
          handleChange= (e) =>{
              this.setState({
                  [e.target.name] : +e.target.value
              })
          }
    //had to temporaly take out img to fit stuff
    render(){
return(
    <div>
    <div className='product-box'>
    <div className='products'>
    <h4>ID: {this.props.id}</h4>
    <h3>{this.props.inventory.name}</h3>
    <h3>{this.props.inventory.price}</h3>
    <img src={this.props.inventory.img} />
    </div>
    
    <button onClick={this.deleteItem}>Delete</button>
    <button onClick={this.editItem} >Edit</button>
    </div>
    {this.state.editMode?<Product_Input />:null}
    </div>
)
 }
}
 export default Product

