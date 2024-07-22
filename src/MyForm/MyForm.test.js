import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MyForm from './MyForm';

test('submit form with valid data', () => {
  render(<MyForm />);

  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
  

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  

});