import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import ToDoContainer from './ToDoContainer/ToDoContainer';
import HistoryContainer from './HistoryContainer/HistoryContainer';

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <div className='row'>
            <div className='col-8'>
                <ToDoContainer />
            </div>
            <div className='col-4'>
                <HistoryContainer />
            </div>
        </div>
    </Provider>
)

export default App;