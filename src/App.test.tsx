import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/listing', () => {
  return function () {
    return <span>Listing Components</span>
  }
});
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Spacex Launch Details/i);
  expect(linkElement).toBeInTheDocument();
});
