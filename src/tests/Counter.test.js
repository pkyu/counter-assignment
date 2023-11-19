// import necessary react testing library helpers here
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter';
let counterComponent;

beforeEach(() => {
  // Render the Counter component here
  counterComponent = render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = counterComponent.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const currVal = counterComponent.getByTestId('count');
  expect(currVal).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const currVal = counterComponent.getByTestId('count');
  const incrementButton = counterComponent.getByText('+');

  userEvent.click(incrementButton);
  expect(currVal).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const currVal = counterComponent.getByTestId('count');
  const decrementButton = counterComponent.getByText('-');

  userEvent.click(decrementButton);
  expect(currVal).toHaveTextContent('-1');
});
