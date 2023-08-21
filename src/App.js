import React from 'react';

import { CreateTodoButton } from './components/todo/Button';
import { TodoCounter } from './components/todo/Counter';
import { TodoItem } from './components/todo/Item';
import { TodoList } from './components/todo/List';
import { TodoSearch } from './components/todo/Search';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de introduccion a Reactjs', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'LALALALALA', completed: false}
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
  console.log(`User input: ${searchValue}`);

  const todosCompleted = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  })

  return (
    // This <></> is equivalent to this <React.Fragment><React.Fragment />
    <>
      <TodoCounter completed={todosCompleted} total={totalTodos}/>
      <TodoSearch
        searchValue={ searchValue }
        setSearchValue={ setSearchValue }
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={ todo.text }
            title={ todo.text }
            completed={ todo.completed }
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
