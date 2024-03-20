interface ITodoDataProps {
  title: string
}

const TodoItem: React.FC<ITodoDataProps> = ({ title }) => {

  return (
    <div className="todoBlock-item">
      <p>{title}</p>
    </div>
  )
}

export default TodoItem