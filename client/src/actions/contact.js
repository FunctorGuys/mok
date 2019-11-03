import axios from 'axios';
import { CONTACT_SUCCESS, CONTACT_FAIL } from './types';
import { setAlert } from './alert';

export const contact = (name, email, text, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ name, email, text });

  try {
    const res = await axios.post('/api/contact', body, config);
    dispatch({
      type: CONTACT_SUCCESS,
      payload: res.data
    });
    history.push('/MessageReceived');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: CONTACT_FAIL
    });
  }
};
