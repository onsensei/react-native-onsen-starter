import VectorIcon from '../VectorIcon.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('VectorIcon', () => {
  let component;

  beforeEach(() => {
    component = <VectorIcon/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
