import { SET_ALERT } from "./cartTpes";

const initialState = {
  alert: ""
};

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alert: payload
      }
      default:
        return {...state}
  }
};

export default alertReducer;
