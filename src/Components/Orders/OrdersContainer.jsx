import React, { memo } from "react";
import { getCardsInSearching, getCarsThunk, setCardsForSearchingThunk, setCurrentPage} from "../../Redux/order-reducer";
import { connect } from "react-redux";
import Orders from "./Orders";

const OrdersContainer = memo(function Greeting(props)
{
  return <Orders {...props} />;
});
let mapStateToProps = (state) => {
  return {
    orders: state.OrdersPage.orders,
    pageSize: state.OrdersPage.pageSize,
    totalUserCount: state.OrdersPage.totalUserCount,
    currentPage: state.OrdersPage.currentPage,
    amountPage:state.OrdersPage.amountPage,
  };
};

export default connect(mapStateToProps, {
  getCarsThunk,
  setCurrentPage,
  getCardsInSearching,
  setCardsForSearchingThunk
})(OrdersContainer);
