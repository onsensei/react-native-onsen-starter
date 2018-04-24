import React, {Component} from 'react';
import styles from './App.style';
import {Platform, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  state = {
    count: 0
  }

  increase = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.instructions}>
          count : {this.state.count}
        </Text>
      </View>
    );
  }
}
