import '../../static/css/todo/Counter.css';

function TodoCounter({ total, completed }) {
  const isAllCompleted = completed === total;

  return(
    <h1 className='TodoCounter'>
      {
        isAllCompleted
        ? "Congratulations, you have completed all your todos"
        : (
            <>
              Has completado <span>{completed}</span> de <span>{total}</span> TODOS
            </>
          )
      }
    </h1>
  )
}

export { TodoCounter };
