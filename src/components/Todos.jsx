import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import TodoNavigation from "./TodoNavigation"
import "./todos.css"

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [filter, setFilter] = useState("")
  const [sort, setSort] = useState("")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    let filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(filter)
    )
    setFilteredTodos(filteredTodos)
  }, [todos, filter])

  useEffect(() => {
    

  }, [todos, sort])

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
      index: 1,
    }
    setTodos((prev) => [...prev, newTodo])
    setTitle("")
  }

  const toggleHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <form className="todos" onSubmit={addTodo}>
        <h4>New todo:</h4>
        <input
          type="text"
          onChange={handleInput}
          style={{ fontSize: "20px" }}
          value={title}
          placeholder="What you need to do?"
        />
      </form>

      <h4 className="todos">TODO list</h4>
      <TodoNavigation
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
        filter={filter}
        sort={sort}
        setSort={setSort}
      />
      <hr className="todos" />

      {filteredTodos.length ? (
        <TodoList
          className="todos"
          todos={filteredTodos}
          setTodos={setTodos}
          title={title}
          setTitle={setTitle}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      ) : (
        <h3 className="center" style={{ color: "gray" }}>
          empty
        </h3>
      )}
    </>
  )
}

export default Todos
