import React from 'react';
import { render } from '@testing-library/react';

import Badget from '.';

it('renders badget component', () => {
  const { getByText, container } = render(<Badget>Hello World</Badget>);

  expect(getByText('Hello World')).toBeInTheDocument();
  expect(container.firstElementChild?.classList.contains('badget')).toBeTruthy();
  expect(container.firstElementChild).toMatchSnapshot();
});
