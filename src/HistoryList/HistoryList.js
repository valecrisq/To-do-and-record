import React from 'react';

const HistoryList = ({ todos }) => {

    return todos.history.map((action, index) => {
        return (
            <div key={index}>
                {
                    todos.current && todos.current.id === action.id ?
                        <li className='list-group-item active'>{action.message}</li> :
                        <li className='list-group-item text-secondary'>{action.message}</li>
                }
            </div>
        )
    })

}

export default HistoryList;