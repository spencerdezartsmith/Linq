import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import TabNavigator from './src/routers/AppNavigator';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <TabNavigator />
    </Provider>
  );
};

export default App;
