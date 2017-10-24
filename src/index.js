import './assets/main.css'
import './index.html'

import {Provider} from 'react-redux'
import  {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'
import React from 'react'
import {render} from 'react-dom'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import reducers from './redusers/index'
import Phone  from './containers/phone'
import Basket  from './containers/basket'
import Pages from './app'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/phone/:id" component={Phone}/>
        <Route exact path="/basket" component={Basket}/>
        <Route  path="/" component={Pages}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);


/*
 render(
 <Provider store={store}>
 <BrowserRouter>
 <div>
 <Layout>
 <Route exact  path="/" component={Phones}/>
 </Layout>
 <Route path="/phone/:id" component={Phone}/>
 </div>
 </BrowserRouter>
 </Provider>,
 root
 );
 */
