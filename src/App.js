import React from 'react';
import './App.css';
import TodoCounter from './components/TodoCounter/TodoCounter';
import {TodoItem} from './components/TodoItem/TodoItem';
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton';
import {TodoList} from './components/TodoList/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';

const todos = [
  {text:"Cortar Cebolla", completed: false},
  {text:"Tomar Curso de intro a React", completed: true},
  {text:"Llorar con la llorona", completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
    <TodoSearch/>
    
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text}
        text = {todo.text}
        completed = {todo.completed}
        />
      ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
