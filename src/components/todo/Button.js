import '../../css/todo/Button.css'

function CreateTodoButton() {
  return(
    <button className="CreateTodoButton" onClick={
      (event) => {
        console.log('click on create button')
        console.log(event)
        console.log(event.target)
      }
    }
    >
      +
    </button>
  )
}

export { CreateTodoButton }
