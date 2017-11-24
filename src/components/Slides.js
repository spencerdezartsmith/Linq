import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.slides.length - 1) {
      return (
        <Button 
          title='Begin!'
          raised
          color='white'
          borderRadius={8}
          backgroundColor='rgba(169,169,169, 0.7)'
          containerViewStyle={styles.buttonStyle}
          onPress={this.props.onComplete} 
        />
      );
    }
  }

  renderSlides() {
    return this.props.slides.map((slide, idx) => {
      return (
        <View key={slide.text} style={{ ...styles.slideStyle, backgroundColor: slide.backgroundColor }}>
          <Text style={{ ...styles.slideText, color: slide.textColor }}>{slide.text}</Text>
          { this.renderLastSlide(idx) }
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
       {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  slideText: {
    fontSize: 30,
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 25,
    width: 100
  }
};

export default Slides;
