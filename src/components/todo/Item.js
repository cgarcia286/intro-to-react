import '../../css/todo/Item.css'

function TodoItem ({ title, completed }) {
  return (
    <li className='TodoItem'>
      <span className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}>V</span>
      <p className={`TodoItem-p ${completed ? 'TodoItem-p--active' : ''}`}>{ title }</p>
      <span className="Icon Icon-delete">X</span>
    </li>
  )
}

export { TodoItem }
