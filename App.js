import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import Header from './src/components/Header';

const App = () => {
  return (
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <View>
        <Header headerText='linq' />
      </View>
    </Provider>
  );
};

export default App;
