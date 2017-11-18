import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
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
      title: 'My Card',
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
      title: 'Linqing...',
      tabBarLabel: 'Linq',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
    }
  },
  Contacts: {
    screen: Rolodex,
    navigationOptions: {
      title: 'Rolodex',
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
      title: 'Settings',
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

const RootNavigatior = StackNavigator({
  Home: {
    screen: AppNavigator
  }
});

export default RootNavigatior;

