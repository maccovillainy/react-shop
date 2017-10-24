import React from 'react'
import {connect} from 'react-redux'

import {find} from '../actions/phones'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.find(this.state.value, this.props.category);
  }
  onChange(e) {
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick shop</h3>
        <div className="input-group">
          <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input
              onChange={this.onChange}
              type="text"
              className="form-control"
              value={this.state.value}
            />
            <button className="btn btn-default">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => (
  {
    busket: state.busket,
    category: state.category
  }
);

const mapDispatchToProps = dispatch => {
  return {
    find: (text, category) => {
      dispatch(find(text, category))
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);