import React from 'react';
import { render } from '@testing-library/react';

import LabelBlock from '.';

describe('Component LabelBlock', () => {
  it('renders LabelBlock component', () => {
    const { container, getByText } = render(<LabelBlock title="Hi">Hello World</LabelBlock>);

    const tree = container.firstElementChild;

    expect(getByText('Hi')).toBeInTheDocument();
    expect(getByText('Hello World')).toBeInTheDocument();

    expect(tree?.classList.contains('label-block')).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  it('should render LabelBlock without title', () => {
    const { container } = render(<LabelBlock>Hello World</LabelBlock>);

    const tree = container?.firstElementChild?.children[0];
    expect(tree?.classList.contains('label-block-content')).toBeTruthy();

    expect(tree).toMatchSnapshot();
  });
});
