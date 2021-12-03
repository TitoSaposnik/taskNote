import React from 'react';
import './App.css';
import TodoCounter from './components/TodoCounter/TodoCounter';
import {TodoItem} from './components/TodoItem/TodoItem';
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton';
import {TodoList} from './components/TodoList/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';

const defaultTodos = [
  {text:"Cortar Cebolla", completed: false},
  {text:"Tomar Curso de intro a React", completed: true},
  {text:"Llorar con la llorona", completed: false},
  {text:"Hacerse unos mates, vio?", completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos=[];
  if(!searchValue.length >=1){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    
    <TodoList>
      {searchedTodos.map(todo => (
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
