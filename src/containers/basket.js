import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getPhones, loadMore, getPhoneById, toBusket, removePhone, cleanBasket, deleteItem} from '../actions/phones'
import Sidebar from '../components/sidebar'

class Phone extends React.Component {
  constructor(props) {
    super();
    this.state = {
      phone: {}
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  cleanBasket() {
    this.props.cleanBasket()
  }
  deleteItem(id) {
    this.props.deleteItem(id)
  }
  render() {
    const isBasketEmpty = this.props.busket.phones.length === 0

    const renderContent = () => {
      return (
        <div>
          {isBasketEmpty && <div>Your shopping cart is empty</div>}

          <div className='table-responsive'>
            <table className='table-bordered table-striped table-condensed cf'>
              <tbody>
              {this.props.busket.phones.map((phone, index) => (
                <tr
                  key={index}
                  className='item-checout'
                >
                  <td className='first-column-checkout'>
                    <img
                      className='img-thumbnail'
                      src={phone.image}
                      alt={phone.name}
                    />
                  </td>
                  <td>{phone.name}</td>
                  <td>${phone.price}</td>
                  <td>{phone.count}</td>
                  <td onClick={this.deleteItem.bind(this, phone.id)}>
                    <button className="btn btn-danger">X</button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {
            (!isBasketEmpty &&
            <div className='row'>
              <div className='pull-right total-user-checkout'>
                <b>Total:</b>
                ${this.props.busket.sum}
              </div>
            </div>)
          }
        </div>
      )
    }

    const renderSidebar = () => (
      <div>
        <Link
          className='btn btn-info'
          to='/'
        >
          <span className='glyphicon glyphicon-info-sign'/>
          <span>Continue shopping!</span>
        </Link>
        {
          (!isBasketEmpty) &&
          <div>
            <button
              onClick={() => this.cleanBasket()}
              className='btn btn-danger'
            >
              <span className='glyphicon glyphicon-trash'/>
              Clear cart
            </button>
            <button
              className='btn btn-success'
              onClick={() => alert(JSON.stringify(this.props.busket.phones))}
            >
              <span className='glyphicon glyphicon-envelope'/>
              Checkout
            </button>
          </div>
        }
      </div>
    )

    return (
      <div className='view-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              {renderContent()}
            </div>
            <div className='col-md-3 btn-user-checkout'>
              {renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    busket: state.busket
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getPhoneById: (id) => {
      dispatch(getPhoneById(id))
    },
    toBusket: phone => dispatch(toBusket(phone)),
    removePhone: () => dispatch(removePhone()),
    cleanBasket: () => dispatch(cleanBasket()),
    deleteItem: id => dispatch(deleteItem(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);