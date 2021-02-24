import * as types from "./cartTpes";

const total = (newCart) => {
  let totalVal = 0;
  for (let i in newCart) {
    totalVal += newCart[i].price;
  }

  return totalVal;
};

export const addToCartAction = (item, cart) => {
  const newCart = [...cart, item];
  const newTotal = total(newCart);

  return {
    type: types.ADD_TO_CART,
    payload: { newCart, newTotal }
  };
};

export const removeFromCartAction = (item, cart) => {
  let hardCopy = [...cart];
  hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
  let newTotal = total(hardCopy);
  return {
    type: types.REMOVE_FROM_CART,
    payload: {hardCopy, newTotal}
  };
};

// alert Actions
export const setAlertAction = (str) => {
  return {
    type: types.SET_ALERT,
    payload: str
  };
};
