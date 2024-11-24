import React, { useEffect } from "react";
import Order from "./Order";
import axios from "axios";
import { setOrder } from "../../Redux/order-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

let OrderContainer = (props) => {
  const orderId = useParams();
  useEffect(() => {
    axios
      .get("https://alexsandrzolotarev.github.io/api/encrypted.json")
      .then((res) => props.setOrder(res.data.models[orderId.carId - 1]))
      .catch((res) => props.setOrder(null));
  },[orderId]);
  return <Order {...props}/>;
};

let mapStateToProps = (state) => {
  return {
    order: state.OrdersPage.order,
  };
};
export default connect(mapStateToProps, {
  setOrder,
})(OrderContainer);
