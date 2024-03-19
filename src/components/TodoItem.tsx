import { useAppDispatch } from "../hooks"
import { removeTodo } from "../redux/setTodos/slice";

interface ITodoItemProps {
  id: number,
  title: string
}

const TodoItem: React.FC<ITodoItemProps> = ({id, title}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    dispatch(removeTodo({id}))
  }

  return (
    <div className="todoBlock-item">
      <p>{title}</p>
      <div className="todoBlock-itemBtns">
        <input type="checkbox" className="todoBlock-itemBtns--checkbox" id="toggle"/>
        <label htmlFor="toggle"/>
        <button className="todoBlock-itemBtns--removeBtn" onClick={onClickRemove}>x</button>
      </div>
    </div>
  )
}

export default TodoItem