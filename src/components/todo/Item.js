function TodoItem ({ title, completed }) {
  return (
    <li>
      <span>Completed: { completed ? 'yes' : 'no' }</span>
      <p>{ title }</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem }
