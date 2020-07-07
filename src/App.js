import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import axios from 'axios'
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import routes from './routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '/api/inventory/',
      inventory: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.getInventory()
    },1333);
   
  }

  

  getInventory = () => {
    const { url } = this.state
    axios.get(`${url}`)
      .then(res => {
        this.setState({ inventory: res.data })
      })
      .catch(err => console.log(err,'error at APP-axios call component did mount//didnt get data'))
  }
  
  render() {
   console.log(this.state.inventory)
    
    return (
    
      <div className='app'>
      {routes}
      <Header />
        <main className='mainBox'>
       
          <Dashboard 
          getInventory={this.getInventory} 
           inventory={this.state.inventory} />
            <Form  />
        </main> 
      
      </div>
      

    )
  }
}

export default App;
