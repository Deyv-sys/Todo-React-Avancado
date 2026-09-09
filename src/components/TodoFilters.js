import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoFilters({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('ALL')}>Todas</button>
      <button onClick={() => setFilter('DONE')}>Concluídas</button>
      <button onClick={() => setFilter('PENDING')}>Pendentes</button>
      <button onClick={() => setFilter('ALL')}>Limpar Filtro</button>
    </div>
  );
}

export default TodoFilters;