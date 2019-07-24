import React, { useState } from 'react';

const ToDoItem = ({ todo, removeTodo, editTodo }) => {
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description);
    const [isEditable, setIsEditable] = useState(false);

    if (!isEditable) {
        return <div className="card card border-primary mb-3" style={{ maxWidth: '50rem' }}>
            <div className="card-header text-primary">
                {todo.name.charAt(0).toUpperCase() + todo.name.slice(1)}
            </div>
            <div className="card-body">
                <p className='card-text'>{todo.description.charAt(0).toUpperCase() + todo.description.slice(1)}</p>
                <footer className="blockquote-footer" style={{marginBottom: '1rem'}}>Created: {todo.creationDate}</footer>
                <button className='btn btn-sm btn-warning' style={{marginRight: '0.5rem'}} type="button" onClick={() => removeTodo(todo)}>
                    <i className="fas fa-trash-alt fa-lg" />
                </button>
                <button className='btn btn-sm btn-warning' type='button' onClick={() => setIsEditable(true)}>
                    <i className="fas fa-edit fa-lg" />
                </button>
            </div>
        </div>
    }

    return (
        <div>

            <form onSubmit={(event) => {
                event.preventDefault();
                setIsEditable(false);
                editTodo({
                    name,
                    description,
                    id: todo.id
                })
            }}>

                <div className='form-row align-items-center'>
                    <div className="col-auto">
                        <input className="form-control" defaultValue={name} type="text" maxLength='30' onChange={event => setName(event.target.value)} required />
                    </div>
                    <div className="col-auto">
                        <input className="form-control" defaultValue={description} type="text" onChange={event => setDescription(event.target.value)} required />
                    </div>
                    <button className='btn btn-sm btn-primary' type='submit'>
                        <i className="fas fa-check fa-lg" />
                    </button>
                </div>
            </form>

        </div>
    )

}

export default ToDoItem;