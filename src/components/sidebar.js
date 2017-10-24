import React from 'react'
import Busket from './busket'
import Search from './search'
import Categories from './categories'

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Busket/>
        <Search/>
        <Categories/>
      </div>
    )
  }
}