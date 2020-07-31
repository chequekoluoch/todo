import React from 'react'
import { Typography,ListItem,IconButton, Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';



const Todo = ({ todo,toggleComplete,removeTodo }) => {
    const handleCheckboxClick=()=>{
         toggleComplete(todo.id)
    }
    const handleRemoveClick=()=>{
        removeTodo(todo.id)
   }
    return (
        <ListItem style={{display:'flex'}}>
            <Checkbox 
            checked={todo.completed}
            onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
            style={{color:"blue",
                 textDecoration:todo.completed?"line-through" : null}}
            >{todo.task}</Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default Todo
