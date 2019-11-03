import axios from 'axios';
import {
  REGISTER_SUCCESS,
  ADMIN_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT,
  CONFIRM_EMAIL,
  EMAIL_ERROR,
  USER_LOADED,
  AUTH_ERROR,
  RECOVERY_FAIL,
  RECOVERY_SUCCESS,
  UPDATE_PASSWORD,
  NEWPASS_ERROR
} from './types';
import { setAlert } from './alert';
import setAuthToken from './../utils/setAuthToken';

//Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    if (res.data.role === 0) {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }
    if (res.data.role === 1) {
      dispatch({
        type: ADMIN_LOADED,
        payload: res.data
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//Update password
export const updatePass = (password, token, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ password, token });

    const res = await axios.put(`/api/auth/updatePassword`, body, config);

    dispatch({
      type: UPDATE_PASSWORD,
      payload: res.data
    });
    history.push('/login');
  } catch (err) {
    dispatch({
      type: NEWPASS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Confirm user
export const confirmEmail = token => async dispatch => {
  try {
    const res = await axios.get(`/api/auth/confirmation/${token}`);

    dispatch({
      type: CONFIRM_EMAIL,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: EMAIL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Register User
export const register = ({
  name,
  email,
  password,
  phone,
  history
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    name,
    email,
    password,
    phone
  });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    history.push('/');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//Recovery password
export const recovery = ({ email, history }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.post('/api/auth/recovery', body, config);

    dispatch({
      type: RECOVERY_SUCCESS,
      payload: res.data
    });

    history.push('/passwordIns');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: RECOVERY_FAIL
    });
  }
};

//Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
