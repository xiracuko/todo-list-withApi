import TodoItem from "./TodoItem"

function Todo() {

  return (
    <div className="container">
      <div className="todoBlock">
        <form>
          <input type="text" />
          <button>+ add</button>
        </form>
        <TodoItem />
      </div>
    </div>
  )
}

export default Todo