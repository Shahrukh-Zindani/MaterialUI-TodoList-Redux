import React, { PropTypes } from 'react'
import {
  blueGrey800,
  red600,
} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

const listElementStyles = {
  color: blueGrey800,
  fontSize: 18,
  lineHeight: '24px',
}

const listElementCheckedStyles = {
  ...listElementStyles,
  textDecoration: 'line-through',
}

const Todo = ({ onClick, onDelete, completed, text }) => (
  <ListItem
   style={{width: '90%'}}
   rightIconButton={<div style={{display: 'flex'}}>
    <IconButton
     tooltip='remove'
     tooltipPosition='bottom-right'
     onClick={onDelete}
     iconStyle={{color: red600}}
    >
      <DeleteIcon/>
    </IconButton>
    <Checkbox 
      onCheck={onClick}
      style={{marginTop:12}}
    />
   </div>}>
    <div style={{display: 'flex'}}>
      <li style={!completed ? listElementStyles: listElementCheckedStyles}>
        {text}
      </li>
    </div>
    <Divider />
  </ListItem>
)


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
