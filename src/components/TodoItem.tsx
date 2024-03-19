import { useAppDispatch } from "../hooks"
import { removeTodo, toggleTodo } from "../redux/setTodos/slice";

interface ITodoItemProps {
  id: number,
  title: string,
  toggle: boolean
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, title, toggle }) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    dispatch(removeTodo({ id }))
  }

  const onClickToggle = () => {
    dispatch(toggleTodo({ id, toggle }))
  }

  let string = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  while (randomString.length < 6) {
    randomString += string[Math.floor(Math.random() * string.length)];
  }

  return (
    <div className="todoBlock-item">
      <p>{title}</p>
      <div className="todoBlock-itemBtns">
        <input type="checkbox" className="todoBlock-itemBtns--checkbox" id={randomString} checked={toggle} onChange={onClickToggle} />
        <label htmlFor={randomString} />
        <button className="todoBlock-itemBtns--removeBtn" onClick={onClickRemove}>x</button>
      </div>
    </div>
  )
}

export default TodoItem