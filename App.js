import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import store from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LinqScreen from './src/screens/LinqScreen';
import ContactsListScreen from './src/screens/ContactsListScreen';
import CardScreen from './src/screens/CardScreen';
import SettingsScreen from './src/screens/SettingsScreen';

class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          linq: { screen: LinqScreen },
          contacts: { screen: ContactsListScreen },
          personal: {
            screen: StackNavigator({
              card: { screen: CardScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      }
    }, {
      // This is where you can turn on/off the tab navigation for the 
      // opening screens. Once auth is done it will be turned off.
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true,
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
