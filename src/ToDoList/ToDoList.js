import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({ list, removeTodo, editTodo }) => {

    return list.map(todo => {
        return <div key={todo.id}>
            <ToDoItem todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
    })

}

export default ToDoList;