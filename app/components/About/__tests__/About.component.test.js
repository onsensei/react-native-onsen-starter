import About from '../About.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = <About/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
