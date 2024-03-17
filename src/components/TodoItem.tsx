function TodoItem() {

  return (
    <div className="todoBlock-item">
      <p>TodoItem</p>
      <div className="todoBlock-itemBtns">
        <input type="checkbox" className="todoBlock-itemBtns--checkbox" id="toggle"/>
        <label htmlFor="toggle"/>
        <button className="todoBlock-itemBtns--removeBtn">x</button>
      </div>
    </div>
  )
}

export default TodoItem