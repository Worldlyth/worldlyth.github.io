import React, { useState } from "react"

const TodoNavigation = ({filter, setFilter, setTodos, sort, setSort}) => {


  const clearTodos = () => {
    setTodos([])
    setFilter('')
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleSorting = (e) => {
    setSort(e.target.checked)
  }

  return (
    <div className="switch todos" style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: "20px", fontSize: "20px" }}>Sort:</span>
      <label>
        Off
        <input type="checkbox" onChange={handleSorting} checked={sort}/>
        <span className="lever"></span>
        On
      </label>

      
      <input 
      type="text" 
      style={{ width: "30%", margin: "0 auto", marginLeft: "300px", textAlign: "center", fontSize: "20px" }} 
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
