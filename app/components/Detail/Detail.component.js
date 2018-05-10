import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Detail.style';
import {Text, View} from 'react-native';

export default class Detail extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Detail page
        </Text>
      </View>
    );
  }
}

Detail.propTypes = {
  navigation: PropTypes.object
};

Detail.defaultProps = {
  navigation: null
};
