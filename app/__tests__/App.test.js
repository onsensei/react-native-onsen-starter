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
  
  it('increase: should made state change', () => {
    expect(instance.state.count).toEqual(0);

    instance.increase();
    expect(instance.state.count).toEqual(1);

    instance.increase();
    expect(instance.state.count).toEqual(2);

    instance.increase();
    expect(instance.state.count).toEqual(3);
  });
});
