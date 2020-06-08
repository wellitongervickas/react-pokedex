import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react';

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

  it('should render with use navigation', () => {
    const { container } = render(
      <Router history={history}>
        <Header useNavigation={true} />
      </Router>
    );

    const tree = container.firstElementChild?.children[1];

    expect(tree?.classList.contains('header-navigation')).toBeTruthy();
    expect(tree).toMatchSnapshot();

  });

  it('should render without use navigation', () => {
    const { container } = render(
      <Router history={history}>
        <Header useNavigation={false} />
      </Router>
    );

    const tree = container.firstElementChild?.children[1];

    expect(tree).toBeUndefined();
    expect(tree).toMatchSnapshot();
  });

  it('should handle event back', () => {
    history.push('/new-route');
    expect(history.location.pathname).toBe('/new-route');

    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    fireEvent.click(getByText(/Go back/i));

    expect(history.location.pathname).toBe('/');
  });
});
