import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Product from './Components/Product/Product'
import Form from './Components/Form/Form';
import ProductInput from './Components/Product/ProductInput';
import Dashboard from './Components/Dashboard/Dashboard'
 

//Its changing url's it's just not doing anything
//Had to make Dashboard a component in our to use routes
//is that normal? Going to sleep it's 3am
export default (
    <Switch>
       
        <Route component={Form} exact path = '/' />
        <Route component={Product} path = '/product'/>
        <Route component={ProductInput} path= '/product/:id' />

    </Switch>
)