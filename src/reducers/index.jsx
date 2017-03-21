import {reducer as form} from 'redux-form';
import {combineReducers} from 'redux';
import auth from './auth';

export default combineReducers({
  auth,
  form
})
