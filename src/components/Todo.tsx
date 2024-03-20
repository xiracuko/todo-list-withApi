import React, { ChangeEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../hooks"
import TodoEmpty from "./TodoEmpty"
import TodoItem from "./TodoItem"
import TodoData from "./TodoData";
import { addTodo, deleteTodos } from "../redux/setTodos/slice";
import { useLazyGetTodosQuery, todosApi } from "../redux/getTodos/api";
import { FieldValues, useForm } from "react-hook-form";
import { newTodoType } from "../types";

function Todo() {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.setTodo);
  const [value, setValue] = React.useState<string>("");
  const [getTodos, {data, isSuccess}] = useLazyGetTodosQuery();
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>();

  const onClickData = () => getTodos(value);

  const onClickAllDelete = () => {
    window.confirm("Do you really want to do a full clean?") 
    && dispatch(todosApi.util.resetApiState()) 
    && dispatch(deleteTodos());
  }

  const onClickAdd = () => {
    setValue("")
    dispatch(addTodo({ title: value }));
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

  return (
    <div className="container">
      <div className="todoBlock">
        <h2>Todo list<p>.</p></h2>
        <div className="todoBlock-info">
          <div className="formBlock">
            <form onSubmit={handleSubmit(onClickAdd)}>
              <input 
              type="text" 
              autoComplete='off'
              spellCheck={false}
              {...register('todo', { required: true })}
              value={value}
              onChange={onChange} 
              />
              {errors?.todo && <p className="errors">Please enter task!</p>}
              <button className="todoBlock-addBtn">+ add</button>
            </form>
            <button className="todoBlock-addBtnData" onClick={onClickData}>getData</button>
            <button className="todoBlock-deleteAllBtn" onClick={onClickAllDelete}>DELETE</button>
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
                  data!.map((todo: newTodoType) => (
                    <TodoData key={Math.random()} title={todo.title} />
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