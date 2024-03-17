import TodoItem from "./TodoItem"

function Todo() {

  return (
    <div className="container">
      <div className="todoBlock">
        <form>
          <input type="text" />
          <button className="todoBlock-addBtn">+ add</button>
        </form>
        <div className="todoBlock-forItems">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  )
}

export default Todo