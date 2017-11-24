import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class LinqScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Button 
          raised
          buttonStyle={styles.buttonStyle}
          borderRadius={100}
          title='linq'
          color='#30ABDD'
          fontSize={24}
        />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#30ABDD',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    height: 200,
    width: 200,
    backgroundColor: 'white'
  }
};

export default LinqScreen;
