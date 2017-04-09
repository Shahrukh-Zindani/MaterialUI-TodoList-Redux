import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <MuiThemeProvider>
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      
      <Paper style={{width: '90%', leftMargin: '15px'}} zDepth={1}>
          <div 
            style={{marginLeft: '10px'}}
          >
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </div>
      </Paper>
      </form>
    </div>
    </MuiThemeProvider>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
