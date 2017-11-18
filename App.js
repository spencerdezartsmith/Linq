import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import NestedNavigator from './src/components/NestedNavigator';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <NestedNavigator />
    </Provider>
  );
};

export default App;
