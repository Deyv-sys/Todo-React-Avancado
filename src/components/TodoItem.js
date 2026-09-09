import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { todos, setTodos } = useContext(TodoContext);

  function toggle() {
    setTodos(
      todos.map(t => t.id === todo.id ? { ...t, done: !t.done } : t)
    );
  }

  function remove() {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={toggle}
      >
        {todo.text}
      </span>
      <button onClick={remove}>Remover</button>
    </li>
  );
}

export default TodoItem;
