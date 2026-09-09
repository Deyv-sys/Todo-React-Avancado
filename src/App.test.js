import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => window.localStorage.clear());

test('adiciona, conclui e filtra uma tarefa', () => {
  render(<App />);
  const input = screen.getByRole('textbox', { name: /nova tarefa/i });
  userEvent.type(input, 'Estudar React');
  userEvent.click(screen.getByRole('button', { name: /adicionar/i }));

  expect(screen.getByText('Estudar React')).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: /concluir estudar react/i }));
  userEvent.click(screen.getByRole('button', { name: 'Pendentes' }));
  expect(screen.getByText(/nenhuma tarefa neste filtro/i)).toBeInTheDocument();
});
