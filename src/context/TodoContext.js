import { createContext, useCallback, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todo-list', []);

  const addTodo = useCallback((text) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: `${Date.now()}-${Math.random()}`, text, done: false },
    ]);
  }, [setTodos]);

  const toggleTodo = useCallback((id) => {
    setTodos((currentTodos) => currentTodos.map((todo) => (
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )));
  }, [setTodos]);

  const removeTodo = useCallback((id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }, [setTodos]);

  const value = useMemo(() => ({
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  }), [todos, addTodo, toggleTodo, removeTodo]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos deve ser usado dentro de TodoProvider');
  }
  return context;
}