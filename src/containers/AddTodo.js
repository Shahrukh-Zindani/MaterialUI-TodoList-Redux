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
        <form id="myForm" onSubmit={e => {
          e.preventDefault()
          if(!input.length)
            return
          dispatch(addTodo(input))
          input=''
          document.getElementById("myForm").reset();
        }}>
        
          <Paper style={{width: '90%', leftMargin: '15px'}} zDepth={1}>
            <div style={{marginLeft: '10px'}}>
                <TextField 
                  hintText="What needs to be done?"
                  className="AddText" 
                  fullWidth={true}
                  onChange={(e) => input=e.target.value}
                />
                <br/>
                <RaisedButton 
                  type="submit" 
                  label='Add todo' 
                  primary={true}  
                />
            </div>
          </Paper>
        </form>
      </div>
    </MuiThemeProvider>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
