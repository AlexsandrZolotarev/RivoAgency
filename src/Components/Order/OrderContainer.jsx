import React, { useEffect } from "react";
import Order from "./Order";
import { getCarsOrder, setOrder } from "../../Redux/order-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder} from "../../Redux/order-selectors";

let OrderContainer = (props) => {
  const orderId = useParams();
  useEffect(() => {
    props.getCarsOrder(orderId);
  }, [orderId]);
  return <Order {...props} />;
};

let mapStateToProps = (state) => {
  return {
    order: getOrder(state),
  };
};
export default connect(mapStateToProps, {
  setOrder,
  getCarsOrder
})(OrderContainer);
