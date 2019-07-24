import React from 'react';
import { connect } from 'react-redux';

import { addToDo, removeToDo, editToDo } from '../action/todos';

import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';

const ToDoContainer = ({ todos, dispatch }) => {

    const createTodo = (toDo) => {
        dispatch(
            addToDo(toDo)
        )
    }

    const removeTodo = (toDo) => {
        dispatch(
            removeToDo(toDo)
        )
    }

    const editTodo = (toDo) => {
        dispatch(
            editToDo(toDo)
        )
    }


    return (
        <div>
            <ToDoForm createTodo={createTodo} />
            <ToDoList list={todos.list} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
    )
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(ToDoContainer);
