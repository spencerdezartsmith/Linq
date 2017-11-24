import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class CardScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My Card',
    headerRight: (
      <Button 
        title='Settings' 
        onPress={() => { navigation.navigate('settings'); }}
        backgroundColor='rgba(0,0,0,0)' 
        color='rgba(0, 122, 255, 1)'
      />
    ),
    headerStyle: {
      marginTop: Platform.OS === 'anrodid' ? 20 : 0
    }
  })

  render() {
    return (
      <View>
        <Text>Card page</Text>
      </View>
    );
  }
}

export default CardScreen;
