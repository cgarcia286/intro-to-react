import { CreateTodoButton } from './components/todo/Button';
import { TodoCounter } from './components/todo/Counter';
import { TodoItem } from './components/todo/Item';
import { TodoList } from './components/todo/List';
import { TodoSearch } from './components/todo/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
