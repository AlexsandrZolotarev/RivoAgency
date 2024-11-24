import React from "react";
import { setCards } from "../../Redux/order-reducer";
import { connect } from "react-redux";
import Orders from "./Orders";
import axios from "axios";
class OrdersContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://alexsandrzolotarev.github.io/api/encrypted.json")
      .then((response) => this.props.setCards(response.data.models));
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
