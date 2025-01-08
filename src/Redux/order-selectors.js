import { createSelector } from "reselect";

const getOrderSelector = (state) => {
    return state.OrdersPage.order;
};

// reselect super selector - for test big project 
// They need for little selector (getOrderSelector) 
// Selector need shorten the code in MapStateToProps
export const getOrder = createSelector(getOrderSelector,(order) =>{
    return order;      
});
