import React from "react"
import "./completed.css"


const TodoList = ({ todos, onToggle, onRemove }) => {
  let style = { fontSize: "20px", color: 'black' }
  let style2 = { fontSize: "20px", textDecoration: "line-through" }
  

  return (
    <>
      <ul className="collection z-depth-1" style={{margin: "0 50px"}}>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="collection-item"
            style={{ display: "flex", paddingTop: "17px" }}
          >
           
            <div style={{ marginRight: "20px", fontSize: "20px" }}>
              {index + 1}.
            </div>
            <label>
              <input
                type="checkbox"
                id="todoCheckbox"
                onChange={() => onToggle(todo.id)} 
                checked={todo.completed}
              />
                <span style={todo.completed? style2 : style}>{todo.title}</span>
            </label>
            <i
              className="material-icons "
              style={{ marginLeft: "auto", cursor: "pointer" }}
              onClick = {()=> onRemove(todo.id)}
            >
              delete
            </i>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
