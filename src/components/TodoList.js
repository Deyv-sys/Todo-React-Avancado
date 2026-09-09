import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList({ filter }) {
  const { todos } = useContext(TodoContext);
  const filteredTodos = todos.filter(todo => {
    if (filter === 'DONE') return todo.done;
    if (filter === 'PENDING') return !todo.done;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;