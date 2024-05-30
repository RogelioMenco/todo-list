import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
      <button className='custon-primary'>Editar</button>
    
    </div>
  );
};

export default TodoItem;
