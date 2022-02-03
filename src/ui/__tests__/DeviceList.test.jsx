import React from 'react';
import { render, screen } from '@testing-library/react';
import DeviceList from '../containers/DeviceList';
import { routes } from '../routes';

/**
 * Check `src/ui/__test-utils__/mocks/handlers.js` for server mocks
 */

describe('<DeviceList />',() => {
  it('should render no DeviceCard when mock server sends null', async () => {
    render(<DeviceList type={routes.WATCHES} />);
    expect(await screen.queryAllByRole('heading', {level: 4})).not.toHaveLength(2);
  });

  it('should render as many DeviceCard as many sent by the mock server', async () => {
    render(<DeviceList type={routes.IPHONES} />);
    expect(await screen.findAllByRole('heading', {level: 4})).toHaveLength(2);
  });
});
