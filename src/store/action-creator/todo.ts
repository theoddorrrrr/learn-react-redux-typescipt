import {Dispatch} from 'redux'
import axios from 'axios'
import { TodoAction, TodoActionTypes } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10) => {
    return async(dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TOODS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout( () => {
                dispatch({type: TodoActionTypes.FETCH_TOODS_SUCCESS, payload: response.data})
            }, 300)
        } catch(e) {
            dispatch({
                type: TodoActionTypes.FETCH_TOODS_ERROR, 
                payload: 'Error occured by loading todos'
            })
        }
    }
}

export const setTodosPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TOODS_PAGE, payload: page}
}