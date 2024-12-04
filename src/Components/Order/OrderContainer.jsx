import React, { useEffect } from "react";
import Order from "./Order";
import { setOrder } from "../../Redux/order-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCars } from "../../api/api";

let OrderContainer = (props) => {
  const orderId = useParams();
  useEffect(() => {
    getCars()
      .then((data) => props.setOrder(data[orderId.carId - 1]))
      .catch((data) => props.setOrder(null));
  }, [orderId]);
  return <Order {...props} />;
};

let mapStateToProps = (state) => {
  return {
    order: state.OrdersPage.order,
  };
};
export default connect(mapStateToProps, {
  setOrder,
})(OrderContainer);
