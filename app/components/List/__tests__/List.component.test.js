import ConnectedList, {mapDispatchToProps} from '../List.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

import {createStore} from 'redux';
import {NavigationActions} from 'react-navigation';
import {shallow} from 'enzyme';

// constant
const store = createStore(() => ({}));

describe('List', () => {
  let connectedComponent;
  let wrapper;
  let instance;

  beforeEach(() => {
    connectedComponent = <ConnectedList store={store}/>;

    const connectedWrapper = shallow(connectedComponent);
    wrapper = connectedWrapper.find('List').shallow();
    instance = wrapper.instance();
  });

  it('renders correctly', () => {
    const tree = renderer.create(connectedComponent);
    expect(tree).toMatchSnapshot();
  });

  it('onPressProductDetailButton01 should call navigateToDetail', () => {
    // arrange
    wrapper.setProps({
      navigateToDetail: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressProductDetailButton01();

    // assert
    const params = {
      title: 'Car',
      description: 'Vehicle'
    };
    expect(instance.props.navigateToDetail).toHaveBeenCalledWith(params);
  });

  it('onPressProductDetailButton02 should call navigateToDetail', () => {
    // arrange
    wrapper.setProps({
      navigateToDetail: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressProductDetailButton02();

    // assert
    const params = {
      title: 'MHW',
      description: 'Game'
    };
    expect(instance.props.navigateToDetail).toHaveBeenCalledWith(params);
  });

  it('onPressProductDetailButton03 should call navigateToDetail', () => {
    // arrange
    wrapper.setProps({
      navigateToDetail: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressProductDetailButton03();

    // assert
    const params = {
      title: 'Ice Cream',
      description: 'Dessert'
    };
    expect(instance.props.navigateToDetail).toHaveBeenCalledWith(params);
  });

  it('onPressGoBackButton should call navigateBack', () => {
    // arrange
    wrapper.setProps({
      navigateBack: jest.fn()
    });
    instance = wrapper.instance();

    // act
    instance.onPressGoBackButton();

    // assert
    expect(instance.props.navigateBack).toHaveBeenCalled();
  });

  it('navigateToDetail should call dispatch with params', () => {
    // arrange
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    const params = {
      title: 'Car',
      description: 'Vehicle'
    };

    // act
    props.navigateToDetail(params);

    // assert
    const dispatchParams = NavigationActions.navigate({routeName: 'Detail', params});
    expect(dispatch).toHaveBeenCalledWith(dispatchParams);
  });

  it('navigateBack should call dispatch with params', () => {
    // arrange
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    
    // act
    props.navigateBack();

    // assert
    const dispatchParams = NavigationActions.back();
    expect(dispatch).toHaveBeenCalledWith(dispatchParams);
  });
});
