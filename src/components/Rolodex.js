import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Accordian from 'react-native-collapsible/Accordion';

const users = [
  {
    fullName: 'Jason',
    email: 'test@test.com',
    phone: '111222333444',
    blurb: 'hey there testing testing'
  },
  {
    fullName: 'Spencer',
    email: 'test@test.com',
    phone: '111222333444',
    blurb: 'hey there testing testing'
  },
  {
    fullName: 'Patrick',
    email: 'test@test.com',
    phone: '111222333444',
    blurb: 'hey there testing testing'
  }
];

class Rolodex extends Component {
  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.fullName}</Text>
      </View>
    );
  }

  renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.email}</Text>
        <Text>{section.phone}</Text>
        <Text>{section.blurb}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <Accordian 
          sections={users}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
      </ScrollView>
    );
  }
}

const styles = {
  header: {
    padding: 5
  },
  content: {
    padding: 5
  }
};

export default Rolodex;
