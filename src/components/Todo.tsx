import TodoEmpty from "./TodoEmpty"
import TodoItem from "./TodoItem"

function Todo() {

  return (
    <div className="container">
      <div className="todoBlock">
        <h2>Todo list<p>.</p></h2>
        <div className="todoBlock-info">
          <div className="formBlock">
            <form>
              <input type="text" />
              <button className="todoBlock-addBtn">+ add</button>
            </form>
            <button className="todoBlock-addBtnData">getData</button>
          </div>
          <div className="todoBlock-forAllItems">
            <h4>Your todos:</h4>
            <div className="todoBlock-forItems">
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
            </div>
            <h4 className="another">Another user's todos:</h4>
            <div className="todoBlock-forOthersItems">
              <TodoEmpty />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo