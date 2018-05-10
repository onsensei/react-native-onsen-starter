import React, {Component} from 'react';
import styles from './Detail.style';
import {Text, View} from 'react-native';

export default class Detail extends Component {
  state = {
    title: '<Product Title>',
    description: '<Product Description>'
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Detail page
        </Text>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        <Text style={styles.description}>
          {this.state.description}
        </Text>
      </View>
    );
  }
}
