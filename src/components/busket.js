import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Busket extends React.Component {
  render() {
    return (
      <div className="list-group">
        <Link to="/basket" className="list-group-item active">count: {this.props.busket.count} - ${this.props.busket.sum}</Link>
      </div>
    )
  }
}
const mapStateToProps = state => (
  {
    busket: state.busket
  }
);
export default connect(mapStateToProps, null)(Busket);