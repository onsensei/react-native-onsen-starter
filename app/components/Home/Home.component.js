import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Home.style';
import {bindActionCreators} from 'redux';
import {Button, Platform, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {get, noop} from 'lodash';
import {NavigationActions} from 'react-navigation';
import * as actions from '../../redux/actions/index.action';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Home extends Component {
  state = {
    count: 0
  }

  onPressCountButton = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }
  
  onPressGoodMorningButton = () => {
    const actionPayload = {
      message: 'Good Morning from dispatcher',
      time: '8:00'
    };
    this.props.goodMorningDispatcher(actionPayload);
  }

  onPressGoodAfternoonButton = () => {
    const actionPayload = {
      message: 'Good Afternoon from dispatcher',
      time: '14:00'
    };
    this.props.goodAfternoonDispatcher(actionPayload);
  }

  onPressGoodNightButton = () => {
    const actionPayload = {
      message: 'Good Night from dispatcher',
      time: '20:00'
    };
    this.props.goodNightDispatcher(actionPayload);
  }
  
  onPressGreetingAllButton = () => {
    this.props.greetingAllDispatcher();
  }

  onPressGoToListPageButton = () => {
    this.props.navigateToList();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit Home.component.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        
        <Text style={styles.instructions}>
          count : {this.state.count}
        </Text>
        <Button title='count++' onPress={this.onPressCountButton}/>

        <Text style={styles.instructions}>
          Greeting: {this.props.message} at {this.props.time}
        </Text>
        <View style={styles.horizontalContainer}>
          <Button title='Good Morning' onPress={this.onPressGoodMorningButton} />
          <Button title='Good Afternoon' onPress={this.onPressGoodAfternoonButton} />
        </View>
        <View style={styles.horizontalContainer}>
          <Button title='Good Night' onPress={this.onPressGoodNightButton} />
          <Button title='Greeting All' onPress={this.onPressGreetingAllButton} />
        </View>

        <Text style={styles.instructions}>
          Navigate
        </Text>
        <Button title='Go to List page >' onPress={this.onPressGoToListPageButton}/>
      </View>
    );
  }
}

Home.propTypes = {
  navigateToList: PropTypes.func,
  
  message: PropTypes.string,
  time: PropTypes.string,
  
  greetingAllDispatcher: PropTypes.func,
  goodMorningDispatcher: PropTypes.func,
  goodAfternoonDispatcher: PropTypes.func,
  goodNightDispatcher: PropTypes.func
};

Home.defaultProps = {
  navigateToList: noop,
  
  message: '',
  time: '',

  greetingAllDispatcher: noop,
  goodgoodMorningDispatcherMorning: noop,
  goodAfternoonDispatcher: noop,
  goodNightDispatcher: noop
};

const mapStateToProps = (state) => ({
  message: get(state, 'greetingState.message', ''),
  time: get(state, 'greetingState.time', '')
});
 
export const mapDispatchToProps = (dispatch) => ({
  greetingAllDispatcher: bindActionCreators(actions.greetingAllActionCreator, dispatch),
  goodMorningDispatcher: bindActionCreators(actions.goodMorningActionCreator, dispatch),
  goodAfternoonDispatcher: bindActionCreators(actions.goodAfternoonActionCreator, dispatch),
  goodNightDispatcher: bindActionCreators(actions.goodNightActionCreator, dispatch),

  navigateToList: () => dispatch(NavigationActions.navigate({routeName: 'List'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
