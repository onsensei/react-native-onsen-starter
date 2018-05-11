import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Detail.style';
import {Text, View} from 'react-native';

export default class Detail extends Component {
  render () {
    const title = this.props.navigation.getParam('title', '<Product Title>');
    const description = this.props.navigation.getParam('description', '<Product Description>');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Detail page
        </Text>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
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
