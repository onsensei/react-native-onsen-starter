import Detail from '../Detail.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('Detail', () => {
  let component;
  
  beforeEach(() => {
    const navigation = {
      getParam: jest.fn()
    };

    component = <Detail navigation={navigation}/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
