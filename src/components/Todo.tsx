import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import TodoEmpty from "./TodoEmpty"
import TodoItem from "./TodoItem"
import { addTodo } from "../redux/setTodos/slice";
import { useLazyGetTodosQuery, useRemoveTodoMutation } from "../redux/getTodos/api";

function Todo() {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.setTodo);
  const [value, setValue] = React.useState("");

  const onClickAdd = (e: any) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }))
  }

  const [trigger, {data, isSuccess}] = useLazyGetTodosQuery();
  const { } = useRemoveTodoMutation();

  const onClickData = () => {
    trigger(value);
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
            <button className="todoBlock-addBtnData" onClick={onClickData}>getData</button>
          </div>
          <div className="todoBlock-forAllItems">
            <h4>Your todos:</h4>
            <div className="todoBlock-forItems">
              {
                todos.length ?
                  todos.map((todo) => (
                    <TodoItem key={Math.random()} id={todo.id} title={todo.title} toggle={todo.toggle} />
                  )) :
                  <TodoEmpty />
              }
            </div>
            <h4 className="another">Another user's todos:</h4>
            <div className="todoBlock-forOthersItems">
              {
                isSuccess ?
                  data.map((todo: any) => (
                    <TodoItem key={Math.random()} id={todo.id} title={todo.title} toggle={todo.toggle} />
                  )) :
                  <TodoEmpty />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo