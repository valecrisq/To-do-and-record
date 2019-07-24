import React, { useState } from 'react';

const ToDoForm = ({ createTodo }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    return (
        <div className='input-group mb-5'>
            <form onSubmit={(event) => {
                event.preventDefault();
                createTodo({
                    name,
                    description
                }),
                setName('');
                setDescription('');
            }}>
                <div className='form-row align-items-center'>
                    <div className="col-auto">
                        <input className="form-control" type="text"  value={name} maxLength='30' onChange={event => setName(event.target.value)} required />
                    </div>
                    <div className="col-auto">
                        <input className="form-control" type="text"  value={description} onChange={event => setDescription(event.target.value)} required />
                    </div>
                    <button className='btn btn-primary btn-sm' type='submit'>ADD</button>
                </div>
            </form>
        </div >
    )
}

export default ToDoForm;
