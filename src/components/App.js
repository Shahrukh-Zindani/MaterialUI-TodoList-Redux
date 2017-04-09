import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import { grey700 } from 'material-ui/styles/colors';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
   <Paper style={{paddingBottom: '20px', marginTop: 100, marginBottom: 100, marginRight: 20, marginLeft: 40}}>
   	 <div 
          style={{
            display: 'flex',
            
          }}
          >
            <div style={{marginLeft: '44%'}}>
              <h1 style={{ textAlign: 'center', color: grey700}}>
                Todo List 
              </h1>
            </div>
            <div style={{ marginRight:'10%', marginTop: 13}}>
              <IconButton >
                <ListIcon/>
              </IconButton>
            </div>
          </div>
       <VisibleTodoList />
      <AddTodo />
    
    </Paper>

  </MuiThemeProvider>
)

export default App
