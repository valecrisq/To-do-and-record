import React from 'react';
import HistoryList from '../HistoryList/HistoryList';

import { enableRecording, playRecording, clearHistory, stopPlay } from '../action/todos';

import { connect } from 'react-redux';


const HistoryContainer = ({ todos, dispatch }) => {


    const play = () => {
        const steps = todos.history.map((entry, index) => {
            setTimeout(() => {
                dispatch(
                    playRecording(entry)
                );
                return Promise.resolve(true);
            }, 2000 * index)
        });

        Promise.all(steps).then(() => dispatch(stopPlay()))
    }

    return (
        <div>
            <div className="btn-group-vertical" role="group" style={{ marginBottom: '2rem' }}>

                {
                    todos.enable ?
                        <button className='btn btn-sm btn-danger' type='button' onClick={() => dispatch(enableRecording(false))}>RECORDING OFF</button> :
                        <button className='btn btn-sm btn-success' onClick={() => dispatch(enableRecording(true))}>RECORDING ON</button>
                }

                <button type='button' className='btn btn-secondary' style={{ marginTop: '0.5rem' }} disabled={!todos.history.length} onClick={() => play()}>PLAY HISTORY</button>
                <button type='button' className='btn btn-secondary' disabled={!todos.history.length}  onClick={() => dispatch(clearHistory())}>CLEAR HISTORY</button>
            </div>
            <div>
                <h4>History:</h4>
                <ul className='list-group'>
                    {
                        todos.history.length ?
                            <HistoryList todos={todos} /> :
                            <h6 className='text-danger'>The list is empty!</h6>
                    }
                </ul>
            </div>
        </div>
    )

}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(HistoryContainer);