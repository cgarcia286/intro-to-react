import '../../static/css/todo/Item.css'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'

function TodoItem (props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon
        completed={ props.completed }
        onComplete={props.onComplete}
      />

      <p
        className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}
      >
        { props.title }
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  )
}

export { TodoItem }
