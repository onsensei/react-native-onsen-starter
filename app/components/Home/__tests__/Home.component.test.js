import ConnectedHome, {mapDispatchToProps} from '../Home.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {NavigationActions} from 'react-navigation';
import {shallow} from 'enzyme';

// constant
const store = createStore(() => ({}));

describe('Home', () => {
  let connectedComponent;
  let wrapper;
  let instance;

  beforeEach(() => {
    connectedComponent = <ConnectedHome store={store}/>;

    const connectedWrapper = shallow(connectedComponent);
    wrapper = connectedWrapper.find('Home').shallow();
    instance = wrapper.instance();
  });

  it('renders correctly', () => {
    const tree = renderer.create(connectedComponent);
    expect(tree).toMatchSnapshot();
  });
  
  it('onPressCountButton should increase count', () => {
    // arrange
    instance.setState({
      count: 0
    });

    // act & assert
    instance.onPressCountButton();
    expect(instance.state.count).toEqual(1);

    instance.onPressCountButton();
    expect(instance.state.count).toEqual(2);

    instance.onPressCountButton();
    expect(instance.state.count).toEqual(3);
  });

  it('onPressGoodMorningButton should call goodMorningDispatcher with params', () => {
    // arrange
    wrapper.setProps({
      goodMorningDispatcher: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressGoodMorningButton();

    // assert
    const params = {
      message: 'Good Morning from dispatcher',
      time: '8:00'
    };
    expect(instance.props.goodMorningDispatcher).toHaveBeenCalledWith(params);
  });

  it('onPressGoodAfternoonButton should call goodAfternoonDispatcher with params', () => {
    // arrange
    wrapper.setProps({
      goodAfternoonDispatcher: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressGoodAfternoonButton();

    // assert
    const params = {
      message: 'Good Afternoon from dispatcher',
      time: '14:00'
    };
    expect(instance.props.goodAfternoonDispatcher).toHaveBeenCalledWith(params);
  });

  it('onPressGoodNightButton should call goodNightDispatcher with params', () => {
    // arrange
    wrapper.setProps({
      goodNightDispatcher: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressGoodNightButton();

    // assert
    const params = {
      message: 'Good Night from dispatcher',
      time: '20:00'
    };
    expect(instance.props.goodNightDispatcher).toHaveBeenCalledWith(params);
  });

  it('onPressGreetingAllButton should call greetingAllDispatcher', () => {
    // arrange
    wrapper.setProps({
      greetingAllDispatcher: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressGreetingAllButton();

    // assert
    expect(instance.props.greetingAllDispatcher).toHaveBeenCalled();
  });

  it('onPressGoToListPageButton should call navigateToList', () => {
    // arrange
    wrapper.setProps({
      navigateToList: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressGoToListPageButton();

    // assert
    expect(instance.props.navigateToList).toHaveBeenCalled();
  });

  it('navigateToList should call dispatch with params', () => {
    // arrange
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    // act
    props.navigateToList();

    // assert
    expect(dispatch).toHaveBeenCalledWith(NavigationActions.navigate({routeName: 'List'}));
  });
});
