import { memo } from 'react';
import { useTodos } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <button className="check-button" aria-label={todo.done ? `Reabrir ${todo.text}` : `Concluir ${todo.text}`} onClick={() => toggleTodo(todo.id)}>
        {todo.done ? '✓' : ''}
      </button>
      <span>{todo.text}</span>
      <button className="remove-button" aria-label={`Remover ${todo.text}`} onClick={() => removeTodo(todo.id)}>Remover</button>
    </li>
  );
}

export default memo(TodoItem);
