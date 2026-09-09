import { useTodos } from '../context/TodoContext';
import useInput from '../hooks/useInput';

function TodoForm() {
  const { addTodo } = useTodos();
  const { value, onChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) {
      addTodo(trimmed);
      reset();
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={value}
        onChange={onChange}
        aria-label="Nova tarefa"
      />
      <button className="add-button" type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;