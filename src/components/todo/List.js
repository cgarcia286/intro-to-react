import '../../static/css/todo/List.css';

function TodoList({ children }) {
    return(
      <ul className="TodoList">
        { children }
      </ul>
    )
  }

  export { TodoList };
