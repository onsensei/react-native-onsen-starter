import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './List.style';
import {Text, View} from 'react-native';

export default class List extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to List page
        </Text>
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
