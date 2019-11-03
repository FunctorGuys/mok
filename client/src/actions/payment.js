import axios from 'axios';
import { setAlert } from './alert';
import { ADD_PAYMENT, PAYMENT_ERROR, GET_PAYMENT } from './types';

export const addPaymentCourse = info =>
  async function(dispatch) {
    let payment = await axios.post('/api/payment/course', info);
    let { data } = payment;
    if (data.status === 200) {
      dispatch({
        type: ADD_PAYMENT,
        payload: data
      });
    } else {
      dispatch({
        type: PAYMENT_ERROR,
        payload: data
      });
    }
  };

export const addPaymentShowcase = info =>
  async function(dispatch) {
    console.log('price action: ', info);

    let payment = await axios.post('/api/payment/showcase', info);
    let { data } = payment;
    if (data.status === 200) {
      dispatch({
        type: ADD_PAYMENT,
        payload: data
      });
    } else {
      dispatch({
        type: PAYMENT_ERROR,
        payload: data
      });
    }
  };

export const getCurrentPayment = () => async dispatch => {
  try {
    const res = await axios.get('/api/payment/me');
    dispatch({
      type: GET_PAYMENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PAYMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// export const addPayment = (
//   userId,
//   userName,
//   userEmail,
//   courseId,
//   courseName,
//   price,
//   history
// ) => async dispatch => {
//   try {
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const config = {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     };
//     const body = JSON.stringify({
//       userId,
//       userName,
//       userEmail,
//       courseId,
//       courseName,
//       price
//     });
//     axios
//       .post("/api/payment", body, config)
//       .then(json => {
//         dispatch({
//           type: ADD_PAYMENT,
//           payload: json.data
//         });
//         return json;
//       })
//       .then(json => (window.location.href = `${json.data}`));
//   } catch (err) {
//     dispatch({
//       type: PAYMENT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// //add payment to db
// export const addPaymentToDb = (
//   paymentId,
//   PayerID,
//   history
// ) => async dispatch => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//     const body = JSON.stringify({
//       paymentId,
//       PayerID
//     });
//     console.log('action paymentId: ', paymentId);

//     const res = await axios.post('/api/payment/success', body, config);

//     dispatch({
//       type: ADD_PAYMENTDB,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PAYMENT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
