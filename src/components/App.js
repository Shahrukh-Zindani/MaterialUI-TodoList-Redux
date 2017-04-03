import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
	  <div>
	    <AddTodo />
	    <VisibleTodoList />
	  </div>
	</MuiThemeProvider>
)

export default App
