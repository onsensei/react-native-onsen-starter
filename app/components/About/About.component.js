import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './About.style';
import {Button, Text, View} from 'react-native';

export default class About extends Component {
  
  goToSettingPage = () => {
    this.props.navigation.navigate('Setting');
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to About page
        </Text>
        <Button title='Go to Setting page >' onPress={this.goToSettingPage}/>
        <Button title='< Back' onPress={this.goBack}/>
      </View>
    );
  }
}

About.propTypes = {
  navigation: PropTypes.object
};

About.defaultProps = {
  navigation: null
};
