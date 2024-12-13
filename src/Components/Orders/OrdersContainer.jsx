import React from "react";
import { getCardsInSearching, getCarsThunk, setCardsForSearchingThunk, setCurrentPage} from "../../Redux/order-reducer";
import { connect } from "react-redux";
import Orders from "./Orders";
class OrdersContainer extends React.Component {
  render() {
    return <Orders {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    orders: state.OrdersPage.orders,
    pageSize: state.OrdersPage.pageSize,
    totalUserCount: state.OrdersPage.totalUserCount,
    currentPage: state.OrdersPage.currentPage,
  };
};

export default connect(mapStateToProps, {
  getCarsThunk,
  setCurrentPage,
  getCardsInSearching,
  setCardsForSearchingThunk
})(OrdersContainer);
