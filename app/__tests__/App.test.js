import App from '../App';
import {shallow} from 'enzyme';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('App', () => {
  let component, wrapper, instance;

  beforeEach(() => {
    component = <App/>;
    wrapper = shallow(component);
    instance = wrapper.instance();
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
  
  it('onPressCountButton: should increase count', () => {
    expect(instance.state.count).toEqual(0);

    instance.onPressCountButton();
    expect(instance.state.count).toEqual(1);

    instance.onPressCountButton();
    expect(instance.state.count).toEqual(2);

    instance.onPressCountButton();
    expect(instance.state.count).toEqual(3);
  });
});
