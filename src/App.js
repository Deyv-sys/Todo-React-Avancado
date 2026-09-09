import { useState } from 'react';
import { TodoProvider } from './context/TodoContext'; // Se exportou como export function TodoProvider
import TodoForm from './components/TodoForm'; // Se usou export default TodoForm
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import './App.css';

function App() {
  const [filter, setFilter] = useState('ALL'); // ALL, DONE, PENDING

  return (
    <TodoProvider>
      <main className="app-shell">
        <section className="todo-card">
          <p className="eyebrow">FOCO DIÁRIO</p>
          <h1>Minhas tarefas</h1>
          <p className="subtitle">Organize o que precisa acontecer hoje.</p>
        <TodoForm />
        <TodoFilters filter={filter} setFilter={setFilter} />
        <TodoList filter={filter} />
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;