import * as types from "./cartTpes";
const initialValue = {
  cart: [],
  cartTotal: 0
};

const cartReducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: payload.newCart,
        cartTotal: payload.newTotal
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload.hardCopy,
        cartTotal: payload.newTotal
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
