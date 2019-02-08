import React from 'react';
import Button from '..';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button>Click Me!</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});