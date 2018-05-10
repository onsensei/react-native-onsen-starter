import React, {Component} from 'react';
import styles from './About.style';
import {Text, View} from 'react-native';

export default class About extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to About page
        </Text>
      </View>
    );
  }
}
