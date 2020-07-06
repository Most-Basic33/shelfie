import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './Components/About/About';
import Search from './Components/Search/Search';
  
 
 

//Its changing url's it's just not doing anything
//Had to make Dashboard a component in our to use routes
//is that normal? Going to sleep it's 3am
export default (
    <Switch>
      
        <Route component={About}  path = '/about' />
       <Route component={Search}   path = '/search' />

    </Switch>
)