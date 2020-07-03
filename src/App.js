import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';

import Form from './Components/Form/Form';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      Inventory:[]
    }
  }
componentDidMount(){

}

  getInventory=()=>{

  }
  render(){
    return(
      <div>
      <Header />
      <Form />
      </div>
    )
  }
}

export default App;
