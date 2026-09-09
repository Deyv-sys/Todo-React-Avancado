import { memo } from 'react';

function TodoFilters({ filter, setFilter }) {
  return (
    <div className="filters" role="group" aria-label="Filtrar tarefas">
      <button className={filter === 'ALL' ? 'active' : ''} onClick={() => setFilter('ALL')}>Todas</button>
      <button className={filter === 'DONE' ? 'active' : ''} onClick={() => setFilter('DONE')}>Concluídas</button>
      <button className={filter === 'PENDING' ? 'active' : ''} onClick={() => setFilter('PENDING')}>Pendentes</button>
    </div>
  );
}

export default memo(TodoFilters); 