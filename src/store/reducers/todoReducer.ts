import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TOODS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TOODS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.SET_TOODS_PAGE:
            return {...state, page: action.payload}
        case TodoActionTypes.FETCH_TOODS_ERROR:
            return {...state, loading: false, error: action.payload}
        
        default: 
            return state
    }
}