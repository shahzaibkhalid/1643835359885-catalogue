import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Home from '../pages/Home';
import { routes } from '../routes';

describe('<Home />', () => {
  const renderWithHistory = (initialEntries, Component) => {
    const history = createMemoryHistory({initialEntries});
    render(
      <Router history={history}>
        <Component />
      </Router>
    )
    return history;
  };

  it('should render /home page', () => {
    const history = renderWithHistory([routes.HOME], Home);
    expect(history.location.pathname).toBe(routes.HOME);
    expect(screen.getByTestId('heading')).toHaveTextContent(/\Device Catalogue/);
  })
  it('should move to /iphones page after clicking on /iphones link', () => {
    const history = renderWithHistory([routes.HOME], Home);
    fireEvent.click(screen.getByText(/\Browse iPhones/));
    expect(history.location.pathname).toBe(routes.IPHONES);
  })
  it('should move to /watches page after clicking on /watches link', () => {
    const history = renderWithHistory([routes.HOME], Home);
    fireEvent.click(screen.getByText(/\Browse Watches/));
    expect(history.location.pathname).toBe(routes.WATCHES);
  })
})
