import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form id="myForm" onSubmit={e => {
        e.preventDefault()
        if (!input.getValue().trim()) {
          return
        }
        dispatch(addTodo(input.getValue()))
        var form = document.getElementById("myForm");
        form.reset() 
      }}>

        <Paper style={{width: '90%', leftMargin: '15px'}} zDepth={1}>
          <div 
            style={{marginLeft: '10px'}}
          >
            <TextField 
              hintText="What needs to be done?"
              className="AddText" 
              fullWidth={true}
              ref={(node) => {input = node}}
            >
            </TextField>
          </div>
        </Paper>
        <br/>
        <RaisedButton 
          type="submit" 
          label='Add todo' 
          primary={true}  
        />
      </form>      
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
