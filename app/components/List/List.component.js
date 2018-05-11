import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './List.style';
import {Button, Text, View} from 'react-native';

export default class List extends Component {
  onPressProductDetailButton = () => {
    this.props.navigation.navigate('Detail');
  }

  onPressGoBackButton = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to List page
        </Text>

        <Text style={styles.instructions}>
          Product List
        </Text>
        <Button title='Product 01 >' onPress={this.onPressProductDetailButton}/>
        <Button title='Product 02 >' onPress={this.onPressProductDetailButton}/>
        <Button title='Product 03 >' onPress={this.onPressProductDetailButton}/>

        <Text style={styles.instructions}>
          Navigate
        </Text>
        <Button title='< Go Back' onPress={this.onPressGoBackButton}/>
      </View>
    );
  }
}

List.propTypes = {
  navigation: PropTypes.object
};

List.defaultProps = {
  navigation: null
};
