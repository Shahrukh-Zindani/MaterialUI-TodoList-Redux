import React, { PropTypes } from 'react'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <input type ="checkbox" onClick={onClick}></input>
    <button onClick={onDelete}></button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
