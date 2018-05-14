import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './List.style';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

class List extends Component {
  onPressProductDetailButton01 = () => {
    const params = {
      title: 'Car',
      description: 'Vehicle'
    };
    this.props.navigateToDetail(params);
  }

  onPressProductDetailButton02 = () => {
    const params = {
      title: 'MHW',
      description: 'Game'
    };
    this.props.navigateToDetail(params);
  }

  onPressProductDetailButton03 = () => {
    const params = {
      title: 'Ice Cream',
      description: 'Dessert'
    };
    this.props.navigateToDetail(params);
  }

  onPressGoBackButton = () => {
    this.props.navigateBack();
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
        <Button title='Product 01 >' onPress={this.onPressProductDetailButton01}/>
        <Button title='Product 02 >' onPress={this.onPressProductDetailButton02}/>
        <Button title='Product 03 >' onPress={this.onPressProductDetailButton03}/>

        <Text style={styles.instructions}>
          Navigate
        </Text>
        <Button title='< Go Back' onPress={this.onPressGoBackButton}/>
      </View>
    );
  }
}

List.propTypes = {
  navigateToDetail: PropTypes.func,
  navigateBack: PropTypes.func
};

List.defaultProps = {
  navigateToDetail: noop,
  navigateBack: noop
};

const mapStateToProps = null;
 
export const mapDispatchToProps = (dispatch) => ({
  navigateToDetail: (params) => dispatch(NavigationActions.navigate({routeName: 'Detail', params})),
  navigateBack: () => dispatch(NavigationActions.back())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
