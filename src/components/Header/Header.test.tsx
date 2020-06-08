import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'

import Header from '.';
describe('Component Header', () => {
  const history = createMemoryHistory();

  it('renders Header component', () => {
    const { container } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const tree = container.firstElementChild;

    expect(tree?.classList.contains('header')).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  it('should renders balls', () => {
    const { container } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const tree = container.firstElementChild?.firstElementChild;

    expect(tree?.classList.contains('header-pokedex')).toBeTruthy();
    expect(tree?.children[0].classList.contains('header-pokedex-ball')).toBeTruthy();
    expect(tree?.children[1].classList.contains('header-pokedex-ball-2')).toBeTruthy();
    expect(tree?.children[2].classList.contains('header-pokedex-ball-3')).toBeTruthy();

    expect(tree).toMatchSnapshot();
  });
});
