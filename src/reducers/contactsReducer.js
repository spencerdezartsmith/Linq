import data from './dummyContacts.json';

const contactsReducer = (state = data, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

export default contactsReducer;
