import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Product from "./components/pages/products/index"
    
const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path="/" component = { Main }/>
        <Route path="/products/:id" component = { Product }/>

    </Switch>
    </BrowserRouter>
);

export default Routes;