import React, { PropTypes } from 'react'
import Todo from './Todo'
import List from 'material-ui/List';

const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <List style={{marginLeft: '5%'}}>    
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onDelete={() => onTodoDelete(todo.id)}
        />
      )}
    </ul>
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
}

export default TodoList
