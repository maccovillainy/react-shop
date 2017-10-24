import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import {getCagegories} from '../actions/phones'

class Categories extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCagegories();
  }

  renderCategories() {
    return this.props.categories.map(category => (
      <Link
        to={`/categories/${category.id}`}
        key={category.id}
        className={classNames({
          "list-group-item": true,
          active: +category.id === +this.props.category
        })}
      >{category.name}</Link>
    ))
  }

  render() {
    return (
      <div className="well blosd">
        <ul className="list-group">
          <Link
            to="/"
            className={classNames({
              "list-group-item": true,
              active: !this.props.category
            })}
          >All</Link>
          {this.renderCategories()}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => (
  {
    categories: state.categories,
    category: state.category
  }
);

const mapDispatchToProps = dispatch => {
  return {
    getCagegories: () => {
      dispatch(getCagegories())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);