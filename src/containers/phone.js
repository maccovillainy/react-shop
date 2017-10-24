import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getPhones, loadMore, getPhoneById, toBusket, removePhone} from '../actions/phones'
import Sidebar from '../components/sidebar'

class Phone extends React.Component {
  constructor(props) {
    super();
    this.state = {
      phone: {}
    }
  }

  componentDidMount() {
    this.props.getPhoneById(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.removePhone()
  }
  renderFields() {
    let list = [];
    const {phone} = this.props;
    for (let key in phone) {
      switch (key) {
        case 'cpu':
          list.push([key, phone[key]]);
          break;
        case 'camera':
          list.push([key, phone[key]]);
          break;
        case 'size':
          list.push([key, phone[key]]);
          break;
        case 'weight':
          list.push([key, phone[key]]);
          break;
        case 'display':
          list.push([key, phone[key]]);
          break;
        case 'battery':
          list.push([key, phone[key]]);
          break;
        case 'mamory':
          list.push([key, phone[key]]);
          break;
      }
    }

    return (
      <ul className="list-group">
        {list.map(([key, value]) => (
          <li key={key} className="row list-group-item">
            <div className="col-xs-4">
              <h4>{key}</h4>
            </div>
            <div className="col-xs-8">
              <p>{value}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  renderContent() {
    const {phone} = this.props;
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-xs-6">
            <img src={`../../assets${phone.image}`} alt="" className="img-thumbnail"/>
          </div>
          <div className="col-xs-6">
            {this.renderFields()}
          </div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">{phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    )
  }

  renderSidebar() {
    const {phone} = this.props;
    return (
      <div>
      <Sidebar/>
      <h4>{phone.name}</h4>
      <h4>${phone.price}</h4>
        <Link to="/" className="btn btn-primary btn-large">Back to store</Link>
        <br/>
        <button onClick={()=>this.onAddToCard()} className="btn btn-success btn-large">Add to card</button>
      </div>
    )
  }
  onAddToCard() {
    this.props.toBusket(this.props.phone);
  }
  render() {
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-8">{this.renderContent()}</div>
            <div className="col-xs-4">{this.renderSidebar()}</div>
          </div>
        </div>
      </div>    )
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones,
    phone: state.phone
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getPhoneById: (id) => {
      dispatch(getPhoneById(id))
    },
    toBusket: phone => dispatch(toBusket(phone)),
    removePhone: () => dispatch(removePhone())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);