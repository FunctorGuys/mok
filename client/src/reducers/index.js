import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import course from './course';
import paymentOrder from './payment';
import showcase from './showcase';

export default combineReducers({
  course,
  alert,
  auth,
  paymentOrder,
  showcase
});
