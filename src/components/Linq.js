import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Button from './Button';

class Linq extends Component {
  state = {}

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity>
          <Image 
            source={require('../resources/LinqLogo_White.png')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
};

export default Linq;
3