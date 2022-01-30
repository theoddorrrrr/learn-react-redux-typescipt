export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TOODS = 'FETCH_TOODS',
    FETCH_TOODS_SUCCESS = 'FETCH_TOODS_SUCCESS',
    FETCH_TOODS_ERROR = 'FETCH_TOODS_ERROR',
    SET_TOODS_PAGE = 'FETCH_TOODS_PAGE',
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TOODS
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TOODS_SUCCESS
    payload: any[]
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TOODS_ERROR
    payload: string
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TOODS_PAGE
    payload: number
}

export type TodoAction = FetchTodoAction 
    | FetchTodoSuccessAction 
    | FetchTodoErrorAction 
    | SetTodoPage