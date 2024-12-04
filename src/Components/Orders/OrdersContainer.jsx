import React from "react";
import { setCards } from "../../Redux/order-reducer";
import { connect } from "react-redux";
import Orders from "./Orders";
import { getCars } from "../../api/api";
class OrdersContainer extends React.Component {
  componentDidMount() {
    getCars().then((data) => {
      this.props.setCards(data);
    });
  }
  render() {
    return <Orders orders={this.props.orders} />;
  }
}

let mapStateToProps = (state) => {
  return {
    orders: state.OrdersPage.orders,
  };
};

export default connect(mapStateToProps, {
  setCards,
})(OrdersContainer);
