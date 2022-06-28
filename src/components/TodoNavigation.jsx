import React, { useState } from "react"

const TodoNavigation = ({filter, setFilter, setTodos}) => {


  const clearTodos = () => {
    setTodos([])
    setFilter('')
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="switch todos" style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: "20px", fontSize: "20px" }}>Completed:</span>
      <label>
        Show
        <input type="checkbox" />
        <span className="lever"></span>
        Hide
      </label>
      <input 
      type="text" 
      style={{ width: "30%", margin: "0 auto", textAlign: "center", fontSize: "20px" }} 
      placeholder="find some TODOS"
      onChange={handleFilter}
      value={filter}
      />
      <a
        className="waves-effect waves-light btn"
        style={{ marginLeft: "auto" }}
        onClick={clearTodos}
      >
        clear
      </a>
    </div>
  )
}

export default TodoNavigation
