import React, { useState } from 'react';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

const TodoList = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="todo-list">
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button onClick={handleAddTodo}>Add</button>
      <div className="todos">
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            todo={todo} 
            index={index} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
