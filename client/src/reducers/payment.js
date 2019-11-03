import { PAYMENT_ERROR, ADD_PAYMENT, GET_PAYMENT } from './../actions/types';

const initialState = {
  payment: {
    message: null,
    status: null,
    data: null
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PAYMENT:
      return {
        ...state,
        payment: payload
      };
    case ADD_PAYMENT:
      return {
        ...state,
        payment: payload
      };
    case PAYMENT_ERROR:
      return {
        ...state,
        payment: payload
      };
    default:
      return state;
  }
}
