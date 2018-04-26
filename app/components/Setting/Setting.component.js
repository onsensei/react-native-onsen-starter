import React, {Component} from 'react';
import styles from './Setting.style';
import {Text, View} from 'react-native';

export default class Setting extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Setting page
        </Text>
      </View>
    );
  }
}
