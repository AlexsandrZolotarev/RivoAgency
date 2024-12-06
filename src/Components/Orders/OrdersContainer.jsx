import React from "react";
import { getCarsThunk} from "../../Redux/order-reducer";
import { connect } from "react-redux";
import Orders from "./Orders";
class OrdersContainer extends React.Component {
  componentDidMount() {
    this.props.getCarsThunk();
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
  getCarsThunk
})(OrdersContainer);
