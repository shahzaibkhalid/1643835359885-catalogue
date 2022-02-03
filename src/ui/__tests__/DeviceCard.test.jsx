import React from 'react';
import { render, screen } from '@testing-library/react';
import DeviceCard from '../components/DeviceCard';

describe('<DeviceCard />', () => {
  it('should render DeviceCard using @TDS components', () => {
    const props = {
      imgSrc: 'someImage',
      name: 'iPhone 12',
      brand: 'Apple',
      price: '399'
    }
    render(
      <DeviceCard
        {...props}
      />
    )
    expect(screen.getByRole('img')).toHaveAttribute('src', props.imgSrc);
    expect(screen.getByRole('heading', {level: 3})).toHaveTextContent(props.brand);
    expect(screen.getByRole('heading', {level: 4})).toHaveTextContent(props.name);
    expect(screen.getByTestId('priceValue')).toHaveTextContent(props.price);
  });
})
