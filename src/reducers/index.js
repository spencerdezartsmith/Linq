import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import selectedContactReducer from './selectedContactReducer';
import authReducer from './authReducer';

export default combineReducers({
  contacts: contactsReducer,
  selectedContact: selectedContactReducer,
  authentication: authReducer
});
