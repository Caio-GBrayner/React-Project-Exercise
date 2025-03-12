import { render } from '@testing-library/react';
import App from './App';

test('Outputs the h1 tag', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Welcome to React testing library/);
  expect(h1).toHaveTextContent("Welcome to React testing library");
});