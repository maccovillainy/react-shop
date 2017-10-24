import React from 'react'
import {connect} from 'react-redux'
import {Link, } from 'react-router-dom'
import {getPhones, loadMore, toBusket, getCagegories} from '../actions/phones'

class Phones extends React.Component {
  componentDidMount() {
    this.props.fetchPhones({categoryId: this.props.match.params.id});
    this.props.history.push('/');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPhones({categoryId: nextProps.match.params.id});
    }

  }

  onBuyButton(phone) {
    this.props.toBusket(phone)
  }

  renderPhones(phone, index) {
    const shortDescription = phone.description.length > 60
      ? phone.description.slice(0, 60) + '...'
      : phone.description;
    return (
      <div key={index} className="col-xs-4">
        <div className="thumbnail">
          <img src={phone.image} alt="" className="img-thumbnail"/>
          <div className="caption">
            <h4 className="pull-right">{phone.price}</h4>
            <h4>
              <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
            </h4>
            <p>{shortDescription}</p>
            <p className="itemButton">
              <button
                onClick={this.onBuyButton.bind(this, phone)}
                className="btn btn-primary"
              >Buy now!
              </button>
              <Link to={`/phone/${phone.id}`}>More info</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  loadMore() {
    this.props.loadMore(this.props.phones.length);
  }

  render() {
    return (
      <div className="row">
        {this.props.phones.map(this.renderPhones.bind(this))}
        <div className="col-xs-12">
          {!this.props.match.params.id && <button onClick={() => this.loadMore()} className="btn btn-primary pull-right">Load more</button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones,
    categories: state.categories
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPhones: (filter) => {
      dispatch(getPhones(filter));
    },
    loadMore: () => {
      dispatch(loadMore());
    },
    toBusket: (phone) => {
      dispatch(toBusket(phone))
    },
    getCagegories: () => {
      dispatch(getCagegories())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);