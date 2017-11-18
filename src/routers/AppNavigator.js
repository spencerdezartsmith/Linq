import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Linq from '../components/Linq';
import Rolodex from '../components/Rolodex';
import MyCard from '../components/MyCard';
import Settings from '../components/Settings';

const AppNavigator = TabNavigator({
  MyCard: {
    screen: MyCard,
    navigationOptions: {
      tabBarLabel: 'My Card',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Linq: {
    screen: Linq,
    navigationOptions: {
      tabBarLabel: 'Linq',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    },
  },
  Contacts: {
    screen: Rolodex,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-contacts' : 'ios-contacts-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }
});

export default AppNavigator;

