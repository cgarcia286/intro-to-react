// import React from 'react';

import { CreateTodoButton } from './components/todo/Button';
import { TodoCounter } from './components/todo/Counter';
import { TodoItem } from './components/todo/Item';
import { TodoList } from './components/todo/List';
import { TodoSearch } from './components/todo/Search';

const defaultTodos = [
  {text: 'Cortar cebolla',completed: true},
  {text: 'Tomar el curso de introduccion a Reactjs',completed: false},
  {text: 'Llorar con la Llorona', completed: false},
]

function App() {
  return (
    // This <></> is equivalent to this <React.Fragment><React.Fragment />
    <>
      <TodoCounter completed={5} total={10}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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
