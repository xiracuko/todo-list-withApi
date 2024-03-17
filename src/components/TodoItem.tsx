function TodoItem() {

  return (
    <div className="todoBlock-item">
      TodoItem
      <div className="todoBlock-itemBtns">
        <input type="checkbox" className="itemBtns-checkbox" id="toggle"/>
        <label htmlFor="toggle"/>
        <button>x</button>
      </div>
    </div>
  )
}

export default TodoItem