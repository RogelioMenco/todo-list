import React from 'react';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div className="home">
      <h2>Escribe Tu Nombre</h2>
      <TodoList />
    </div>
  );
};

export default Home;
