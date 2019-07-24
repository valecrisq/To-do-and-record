export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const ENABLE_RECORDING = 'ENABLE_RECORDING';
export const PLAY_RECORDING = 'PLAY_RECORDING';
export const STOP_PLAY = 'STOP_PLAY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';


export const addToDo = todo => ({
    type: ADD_TODO,
    todo
})

export const removeToDo = todo => ({
    type: REMOVE_TODO,
    todo
})

export const editToDo = todo => ({
    type: EDIT_TODO,
    todo
})

export const enableRecording = enable => ({
    type: ENABLE_RECORDING,
    enable
})

export const playRecording = entry => ({
    type: PLAY_RECORDING,
    entry
})

export const stopPlay = () => ({
    type: STOP_PLAY
})

export const clearHistory = () => ({
    type: CLEAR_HISTORY
})