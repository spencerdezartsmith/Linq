import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Linq', backgroundColor: '#30ABDD', textColor: 'white' },
  { text: 'Stay connected', backgroundColor: '#a9ddf2', textColor: 'white' },
  { text: 'Networking made easy', backgroundColor: '#fafafa', textColor: '#30ABDD' },
  { text: 'Exhange cards with the push of a button', backgroundColor: '#30ABDD', textColor: 'white' } 
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides 
        slides={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

export default WelcomeScreen;
