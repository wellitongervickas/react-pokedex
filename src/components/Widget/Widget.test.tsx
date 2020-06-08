import React from 'react';
import { render } from '@testing-library/react';

import Widget from '.';

describe('Component Widget', () => {
  it('renders Widget component', () => {
    const { container, getByText } = render(
      <Widget>
        <span>Hello World</span>
      </Widget>
    );

    const tree = container.firstElementChild;

    expect(getByText('Hello World')).toBeInTheDocument();

    expect(tree?.classList.contains('widget')).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
