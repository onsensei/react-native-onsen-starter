import Setting from '../Setting.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('Setting', () => {
  let component;

  beforeEach(() => {
    component = <Setting/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
