import { memo, useMemo } from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList({ filter }) {
  const { todos } = useTodos();
  const filteredTodos = useMemo(() => todos.filter((todo) => {
    if (filter === 'DONE') return todo.done;
    if (filter === 'PENDING') return !todo.done;
    return true;
  }), [filter, todos]);
  const completedCount = useMemo(() => todos.filter((todo) => todo.done).length, [todos]);

  return (
    <div>
      <div className="list-summary">
        <span>{todos.length} {todos.length === 1 ? 'tarefa' : 'tarefas'}</span>
        <span>{completedCount} concluídas</span>
      </div>
      {filteredTodos.length > 0 ? <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      </ul> : <p className="empty-state">Nenhuma tarefa neste filtro.</p>}
    </div>
  );
}

export default memo(TodoList);