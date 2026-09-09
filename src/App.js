import React, { useState } from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import './App.css';


function App() {
  const [filter, setFilter] = useState('ALL'); // ALL, DONE, PENDING

  return (
    <TodoProvider>
      <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoFilters setFilter={setFilter} />
        <TodoList filter={filter} />
      </div>
    </TodoProvider>
  );
}

export default App; 
