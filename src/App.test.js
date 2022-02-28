import { render, screen } from '@testing-library/react';
import App from './App';

test('mostrar pantalla principal', () => {
  render(<App />);
  const titulo = screen.getByText('Listado de Pokemon');
   
  expect(titulo).toBeDefined();
});
