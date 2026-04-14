import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Trivia title', () => { // test es una función que describe lo que queremos probar, en este caso, que se muestre el título "Trivia"
  render(<App />);
  const titleElement = screen.getByText(/trivia/i); // screen.getByText busca un elemento en la pantalla que contenga el texto "trivia", la "i" hace que no importe si es mayúscula o minúscula
  expect(titleElement).toBeInTheDocument();
});
