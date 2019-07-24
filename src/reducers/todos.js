import { ADD_TODO, REMOVE_TODO, EDIT_TODO, ENABLE_RECORDING, PLAY_RECORDING, STOP_PLAY, CLEAR_HISTORY } from '../action/todos';

const uuidv1 = require('uuid/v1');


const todos = (state = {
    list: [],
    history: [],
    enable: false
}, action) => {

    switch (action.type) {

        case ADD_TODO: {
            const newState = { ...state };
            const { todo } = action;

            newState.list.push({
                id: uuidv1(),
                creationDate: new Date().toLocaleString(),
                ...todo
            })

            if (state.enable) {
                newState.history.push({
                    todos: [...newState.list],
                    message: `You added ${todo.name}`,
                    id: uuidv1()
                });
            }

            return newState;
        }


        case REMOVE_TODO: {
            const newState = { ...state };
            const { todo } = action;

            const todoIndex = newState.list.findIndex(item => item.id === todo.id)

            newState.list.splice(todoIndex, 1);

            if (state.enable) {
                newState.history.push({
                    todos: [...newState.list],
                    message: `You removed ${todo.name}`,
                    id: uuidv1()
                });
            }

            return newState;
        }


        case EDIT_TODO: {
            const newState = { ...state };
            const { todo } = action;

            const editableTodo = newState.list.find(item => item.id === todo.id)

            editableTodo.name = todo.name;
            editableTodo.description = todo.description;

            if (state.enable) {
                newState.history.push({
                    todos: [...newState.list],
                    message: `You edited ${todo.name}`,
                    id: uuidv1()
                });
            }

            return newState;
        }


        case ENABLE_RECORDING: {
            const { enable } = action;

            return {
                ...state,
                enable
            }

        }

        case PLAY_RECORDING: {
            const { entry } = action;

            return {
                ...state,
                list: [...entry.todos],
                current: entry
            }
        }

        case STOP_PLAY: {
            return {
                ...state,
                current: undefined
            }
        }

        case CLEAR_HISTORY: {
            return {
                ...state,
                history: [],
            }
        }

        default:
            return state;
    }
}

export default todos;