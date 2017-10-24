import React from 'react'
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'

import Layout  from './containers/layout'
import Phones  from './containers/phones'

export default  () => {
  return (
    <Layout>
      <Route exact path="/" component={Phones}/>
      <Route exact path="/categories/:id" component={Phones}/>
    </Layout>
  )
}


