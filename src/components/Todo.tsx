import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import TodoEmpty from "./TodoEmpty"
import TodoItem from "./TodoItem"
import { addTodo } from "../redux/setTodos/slice";

function Todo() {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.setTodo);
  const [value, setValue] = React.useState("");

  const onClickAdd = (e: any) => {
    e.preventDefault();
    value && dispatch(addTodo({ title: value }))
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <h2>Todo list<p>.</p></h2>
        <div className="todoBlock-info">
          <div className="formBlock">
            <form onSubmit={onClickAdd}>
              <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
              <button className="todoBlock-addBtn">+ add</button>
            </form>
            <button className="todoBlock-addBtnData">getData</button>
          </div>
          <div className="todoBlock-forAllItems">
            <h4>Your todos:</h4>
            <div className="todoBlock-forItems">
              {
                todos.length ? 
                todos.map((todo) => (
                  <TodoItem id={todo.id} title={todo.title} />
                )) :
                <TodoEmpty />
              }
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